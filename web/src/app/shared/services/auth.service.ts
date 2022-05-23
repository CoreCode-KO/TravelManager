import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { catchError, throwError } from 'rxjs';
import { SignIn, SignUp } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient, public router: Router, private _snackBar: MatSnackBar) { }

  signUp(user: SignUp) {
    return this.http
      .post(`${this.endpoint}/users`, user)
      .subscribe((res: any) => {
        console.log(res)
      });
  }

  signIn(auth: SignIn) {
    return this.http
      .post(`${this.endpoint}/auth/login`, auth)
      .subscribe(
        (res: any) => {
          localStorage.setItem('access_token', res.token);
          this.router.navigate(['/main']);
        },
        error => {
          if (error.status === 401) {
            this._snackBar.open("Błędne dane logowania", ' ', {
              duration: 3000,
              panelClass: ['snackbar-toast', 'snackbar-error']
            });
          }
        }
      );
  }

  get isLoggedIn(): boolean {
    if (this.getUser()) {
      return true;
    }
    return false;
  }

  getUser() {
    return this.decodeToken(this.getToken()!);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth']);
  }
}
