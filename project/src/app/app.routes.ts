import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard, authGuardForLogin } from './guard/auth.guard';
import { TrendingComponent } from './trending/trending.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { BookMarkedComponent } from './book-marked/book-marked.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'trending',
        pathMatch: 'full'
      },
      {
        path: 'trending',
        component: TrendingComponent,
        title: 'Trending'
      },
      {
        path: 'movies',
        component: MoviesComponent,
        title: 'Movies'
      },
      {
        path: 'tv-series',
        component: TvSeriesComponent,
        title: 'Tv Series'
      },
      {
        path: 'bookmark',
        component: BookMarkedComponent,
        title: 'Bookmarked'
      }
    ]
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
