import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppConstant } from '../constants/app-constants';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private baseService: BaseService, private http: HttpClient) {}
  log() {}
  getQuestion() {
    return this.http.get('data/questions.json');
  }
  fetchQuestion() {
    return this.baseService.get(`${AppConstant.ApiUrl}/questions`);
  }
}
