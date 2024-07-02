import { Component, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent implements OnDestroy {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';
  public error: boolean = false;
  public failedRegister: boolean = false;
  public userAlreadyExists: boolean = false;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public register(): void {
    if (this.registerForm?.valid) {
      this.error = false;

      const user: User = {
        email: this.email,
        password: this.password
      };

      this.auth.createUser(user).subscribe(
        {
          next: () => {
            this.router.navigate(['/']);
          },
          error: (error: Error) => {
            if (error.message == 'User already exists') {
              this.userAlreadyExists = true;
            } else {
              this.failedRegister = true;
            }
          }
        }
      )

    } else {
      this.error = true;
    }
  }

  ngOnDestroy(): void {

    this.error = false;
    this.failedRegister = false;
    this.userAlreadyExists = false;

    if (this.registerForm) {
      this.registerForm.reset();
    }

  }
}
