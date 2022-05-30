import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['../styles/ticket.scss']
})
export class EventTicketComponent {

  @Input() ticketData: any[] = [];

  constructor() { }
}
