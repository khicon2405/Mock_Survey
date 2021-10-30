import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  LoginResponse,
  LoginRequestDto,
  VerifyTokenResponse,
} from '../_models';
import { AppConstant } from '../constants/app-constants';
import { BaseService } from '../_services/base.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private baseService: BaseService,
    private cookieService: CookieService
  ) {}

  login(postData: any): Observable<any> {
    return this.baseService.post<any>(
      `${AppConstant.ApiUrl}/auth/login`,
      postData
    );
  }

  verifyToken(token: string): Observable<VerifyTokenResponse> {
    return this.baseService.get<VerifyTokenResponse>(`${AppConstant.ApiUrl}`, {
      token,
    });
  }
  logout() {
    this.cookieService.deleteAll();
  }
}
