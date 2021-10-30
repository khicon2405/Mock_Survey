import { Injectable } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { map } from 'rxjs/operators';
import { AppConstant } from '../../constants/app-constants';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,

    private cookieService: CookieService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const isLoggedIn = this.cookieService.get(AppConstant.APP_COOKIE_TOKEN);
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    } else return true;

    // VerifyToken
    //  return this.authService.verifyToken(isLoggedIn).pipe(
    //    map((res) => {
    //      if (res) {
    //        // this.getCurrentUserInfo();
    //        return true;
    //      }
    //      this.cookieService.deleteAll();
    //      this.router.navigate(['/login']);
    //      return false;
    //    })
    //  );
  }

  //   private getCurrentUserInfo() {
  //     this.userService.getCurrentUserInfo().subscribe(res => {
  //       if (res && res.success) {
  //         this.cookieService.set(AppConstant.COOKIE_KEY_USERINFO, JSON.stringify(res));
  //         console.log(JSON.stringify(res));
  //       }
  //     });
  //   }
}
