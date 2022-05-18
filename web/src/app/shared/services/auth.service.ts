import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { catchError, throwError } from 'rxjs';
import { Auth, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  signUp(user: User) {
    let api = `${this.endpoint}/rejestracja`;
    this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(auth: Auth) {
    return this.http
      .post<any>(`${this.endpoint}/login`, auth)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/main']);
      })
      ;
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

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
