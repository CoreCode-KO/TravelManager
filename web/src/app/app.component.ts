import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ThemeService } from './shared';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeMain: string = '';
  isPayments: boolean = false;

  constructor(private themeService: ThemeService, private router: Router, public authService: AuthService) {
    this.themeService.initTheme();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        switch (true) {
          case event.url.includes('/main'):
            this.routeMain = 'main';
            event.url.includes("/payments") ? this.isPayments = true : this.isPayments = false;
            break;
          case event.url.includes("/panel"):
            this.routeMain = 'panel';
            break;
          case event.url.includes("/admin"):
            this.routeMain = 'admin';
            break;
          case event.url.includes("/auth"):
            this.routeMain = 'auth';
            break;
          case event.url.includes("/landing"):
            this.routeMain = 'landing';
            break;
          default:
            this.routeMain = '';
        }
      }
    });
  }

}
