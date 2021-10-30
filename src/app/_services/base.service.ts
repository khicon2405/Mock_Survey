import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AppConstant } from '../constants/app-constants';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getTokenFromLocalStorage() {
    return this.cookieService.get(AppConstant.APP_COOKIE_TOKEN);
  }

  
  public setTokenLocalStorageWhenLogout() {
    return this.cookieService.deleteAll();
  }

  public getHeader(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.getTokenFromLocalStorage(),
    });
    return headers;
  }

  public get<T>(url: string, params?: any): any {
    return this.http.get(url, { params, headers: this.getHeader() })
        .pipe(map(result => result as T));
}

public post<T>(url: string, data: any): Observable<T> {
    return this.http.post(url, data, { headers: this.getHeader() })
        .pipe(map(result => result as T));
}

public put<T>(url: string, data: any): Observable<T> {
    return this.http.put(url, data, { headers: this.getHeader() })
        .pipe(map(result => result as T));
}

public delete<T>(url: string, data: any): Observable<T> {
    return this.http.delete(url, { headers: this.getHeader(), params: data })
        .pipe(map(result => result as T));
}


}
