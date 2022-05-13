import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() routeMain: string = '';

  user: any;

  constructor() {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")!);
  }


}
