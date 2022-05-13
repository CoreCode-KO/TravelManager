import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['../navigation/navigation.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  user: any;

  constructor() {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")!);
  }

}
