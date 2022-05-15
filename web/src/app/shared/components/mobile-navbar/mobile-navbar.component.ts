import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['../navigation/navigation.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
}
