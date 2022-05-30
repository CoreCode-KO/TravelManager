import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() routeMain: string = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
}
