import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';
  public error: boolean = false;
  public userAlreadyExists: boolean = false;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public register(): void {
    if (this.registerForm?.valid) {
      console.log('Form submitted');
      this.error = false;
    } else {
      console.log('Form not submitted');
      this.error = true;
    }
  }
}
