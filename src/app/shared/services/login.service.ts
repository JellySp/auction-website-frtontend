import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LOGIN_BASE_URL = 'login';

  constructor(private httpClient: HttpClient) {
  }

  public validateLogin(login: Login) {
    return this.httpClient.post<Login>(this.LOGIN_BASE_URL, login);
  }

  getUserData(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
