import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ThemeService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  routeMain: string = '';
  isPayments: boolean = false;

  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.initTheme();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes("/main")) {
          this.routeMain = 'main';
          if (event.url.includes("/payments")) {
            this.isPayments = true;
          } else {
            this.isPayments = false;
          }
        } else if (event.url.includes("/panel")) {
          this.routeMain = 'panel';
        } else if (event.url.includes("/admin")) {
          this.routeMain = 'admin';
        } else if (event.url.includes("/auth")) {
          this.routeMain = 'auth';
        } else if (event.url.includes("/landing")) {
          this.routeMain = 'landing';
        } else {
          this.routeMain = '';
        }
      }
    });
  }

}
