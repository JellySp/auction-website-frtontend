import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_BASE_URL = 'user';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public addUser(user: User) {
    return this.httpClient.post<User>(this.USER_BASE_URL, user);
  }
  getUserDetails(id: number) {
    return this.httpClient.get<User>(this.USER_BASE_URL + id);
  }
  getAllUsers() {
    return this.httpClient.get<User[]>(this.USER_BASE_URL);
  }
  updateUser(user: User) {
    return this.httpClient.put<User>(this.USER_BASE_URL.concat('/id'), user);
  }
  deleteUser(id: number) {
    return this.httpClient.delete<User>(this.USER_BASE_URL + id);
  }
}
