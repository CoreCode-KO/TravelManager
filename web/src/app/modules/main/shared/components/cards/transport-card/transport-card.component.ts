import { Component, Input } from '@angular/core';

@Component({
  selector: 'transport-card',
  templateUrl: './transport-card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class TransportCardComponent {

  @Input() eventData: any[] = [];

  constructor() { }

}
