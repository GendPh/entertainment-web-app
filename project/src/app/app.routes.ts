import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard, authGuardForLogin } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [authGuardForLogin],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'Sign In',
    canActivate: [authGuardForLogin],
  }
];
