import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (userInfo.email === 'admin' && userInfo.password === 'admin') {
      this.setToken('asdasdqweqw213kmkjlon21u931');
      setTimeout(() => {
        localStorage.removeItem('token');
      }, 1000);
      return of(true);
    }
    this.router.navigate(['/products']);
    return throwError(() => new Error('You Are Not Admin'));
  }
}
