import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() routeMain: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChange() {
    console.log(this.routeMain)
  }

}
