import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

export const authGuard: CanActivateFn = (next, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!authService.isUserLoggedIn()) {
    router.navigate(['login']);
    return false;
  } else {
    return true;
  }
}
export const authGuardForLogin: CanActivateFn = (next, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isUserLoggedIn()) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }
}