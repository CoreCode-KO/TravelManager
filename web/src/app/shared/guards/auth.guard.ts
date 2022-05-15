import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    let isAuthenticated = this.authService.isLoggedIn;
    if (route.path === 'auth') {
      if (isAuthenticated) {
        this.router.navigate(['/main']);
      }
      return true;
    } else {
      if (!isAuthenticated) {
        this.router.navigate(['/auth']);
      }
      return isAuthenticated;
    }
  }
}
