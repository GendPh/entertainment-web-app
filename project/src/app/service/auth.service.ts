import { Injectable, signal } from '@angular/core';
import { User, UserLogged } from '../model/user.model';
import { Observable, map } from 'rxjs';
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

  public createUser(user: User): Observable<boolean> {
    return this.http.post<User>(this.userUrl, user).pipe(
      map((user: User) => {
        if (localStorage.getItem('user-movies') == null) {
          localStorage.setItem('user-movies', JSON.stringify(user));
        } else {
          localStorage.removeItem('user-movies');
          localStorage.setItem('user-movies', JSON.stringify(user));
        }

        this.user.update((_) => user);

        return true;
      })
    )
  }

  public logUserOut(): void {
    localStorage.removeItem('user-movies');
    this.user.update((_) => null);
  }
}
