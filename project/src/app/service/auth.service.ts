import { Injectable, signal } from '@angular/core';
import { User, UserLogged } from '../model/user.model';
import { Observable, map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = signal<UserLogged | null>(null);
  private userUrl: string = "https://json-server-deploy-kk18.onrender.com/user-movies";

  constructor(private http: HttpClient) { }

  public isUserLoggedIn(): boolean {
    const userLogged: UserLogged = JSON.parse(localStorage.getItem('user-movies') || 'null');
    return userLogged != null;
  }

  public logUserIn(user: User): Observable<boolean> {
    return this.http.get<User[]>(this.userUrl + `?email=${user.email}&password=${user.password}`).pipe(
      map((users: User[]) => {
        if (users.length == 0) {
          return false;
        }

        const userLogged: UserLogged = { email: users[0].email };

        if (localStorage.getItem('user-movies') == null) {
          localStorage.setItem('user-movies', JSON.stringify(userLogged));
        } else {
          localStorage.removeItem('user-movies');
          localStorage.setItem('user-movies', JSON.stringify(userLogged));
        }

        this.user.update((_) => userLogged);

        return true;
      })
    )
  }

  // Method to create a new user in the database
  public createUser(user: User): Observable<boolean> {
    // Check if the user already exists in the database
    return this.http.get<User[]>(this.userUrl + `?email=${user.email}`).pipe(
      // If the user exists, throw an error message saying that the user already exists
      mergeMap((users: User[]) => {
        if (users.length > 0) {
          throw new Error('User already exists');
        } else {
          // If the user does not exist, create the user in the database
          return this.http.post<User>(this.userUrl, user).pipe(
            map((user: User) => {
              this.setUpLocalStorage(user.email);
              return true;
            })
          );
        }
      })
    );
  }

  // Method to log the user out
  public logUserOut(): void {
    // Remove the user-movies key from the local storage
    localStorage.removeItem('user-movies');
    // Update the user signal with null
    this.user.update((_) => null);
  }

  // Method to set up the local storage with the user email that is logged in
  private setUpLocalStorage(userEmail: string): void {
    // Variable userEmail is the email of the user that is logged in
    const userLogged: UserLogged = { email: userEmail };
    // Check if the user-movies key exists in the local storage
    if (localStorage.getItem('user-movies') == null) {
      // If it does not exist, create it and add the userLogged object
      localStorage.setItem('user-movies', JSON.stringify(userLogged));
    } else {
      // If it exists, remove it and add the userLogged object
      localStorage.removeItem('user-movies');
      localStorage.setItem('user-movies', JSON.stringify(userLogged));
    }
    // Update the user signal with the userLogged object
    this.user.update((_) => userLogged);
  }
}
