import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: any;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private httpClient: HttpClient) {}

  login(userData: { email: string; password: string }): Observable<any> {
    return this.httpClient
      .post<any>(`http://localhost:3000/api/login`, userData, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.currentUser = user)));
  }

  logout() {}

  register(userData: {
    username: string;
    email: string;
    password: string;
    tel?: number;
  }): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:3000/api/register`,
      userData,
      { withCredentials: true }
    );
  }
}
