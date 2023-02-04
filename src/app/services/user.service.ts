import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogged = false;
  constructor() {}

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
