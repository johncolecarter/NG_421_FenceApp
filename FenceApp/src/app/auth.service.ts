import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: {
    email: string;
    password: string;
  };

  isVaildUser = true;

  constructor() { }

  isValid(user, password) {
    if (this.user.email === 'test@gmail.com' && this.user.password === 'test123') {
      return this.isVaildUser;
    }
    return !this.isVaildUser;
  }
}
