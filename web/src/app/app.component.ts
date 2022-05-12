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
        switch (true) {
          case event.url.includes('/main'):
            this.routeMain = 'main';
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
          case event.url.includes("/payments"):
            this.isPayments = true;
            break;
          default:
            this.routeMain = '';
            this.isPayments = false;
        }
      }
    });
  }

}
