import { Component, Input } from '@angular/core';

@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class TicketCardComponent {

  @Input() eventData: any[] = [];

  transport: any[] = ["airplane", "boat", "public", "train", "taxi"];

  constructor() { }

}
