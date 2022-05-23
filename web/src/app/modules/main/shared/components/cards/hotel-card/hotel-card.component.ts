import { Component, Input } from '@angular/core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class HotelCardComponent {

  @Input() eventData: any[] = [];

  constructor() { }

  fakeArray(number: Number) {
    return new Array(number);
  }

}
