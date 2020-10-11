import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Signup} from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private LOGIN_BASE_URL = 'user';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public validateSignup(signup: Signup) {
    return this.httpClient.post<Signup>(this.LOGIN_BASE_URL, signup);
  }
}
