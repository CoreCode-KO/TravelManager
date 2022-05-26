import { Component, Input } from '@angular/core';

@Component({
  selector: 'transport-ticket',
  templateUrl: './transport-ticket.component.html',
  styleUrls: ['../styles/ticket.scss']
})
export class TransportTicketComponent {

  @Input() ticketData: any[] = [];

  constructor() { }
}
