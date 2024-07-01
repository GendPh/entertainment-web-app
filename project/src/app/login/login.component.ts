import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  public email: string = '';
  public password: string = '';
  public error: boolean = false;
  public userNotExists: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public login(): void {
    if (this.loginForm?.valid) {
      this.error = false;

      const user: User = {
        email: this.email,
        password: this.password
      }

      console.log('User: ', user);

      this.auth.logUserIn(user).subscribe(
        {
          next: (result: boolean) => {
            if (!result) {
              this.userNotExists = true;
            } else {
              this.router.navigate(['/']);
            }
          }
        }
      );

      console.log('Form submitted');
    } else {
      this.error = true;
    }
  }
}
