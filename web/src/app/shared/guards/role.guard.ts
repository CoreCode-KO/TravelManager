import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let roles = route.data['roles'] as Array<string>;
    let userRole = this.authService.getUser()?.role;
    let panelRole = this.authService.getUser()?.company_data[0].role;
    const userRoles = [userRole, panelRole];
    if (!userRoles.some(r => roles.includes(r))) {
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
