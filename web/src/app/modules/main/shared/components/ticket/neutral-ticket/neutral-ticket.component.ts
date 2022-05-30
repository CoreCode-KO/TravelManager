import { Component, Input } from '@angular/core';

@Component({
  selector: 'neutral-ticket',
  templateUrl: './neutral-ticket.component.html',
  styleUrls: ['../styles/ticket.scss']
})
export class NeutralTicketComponent {

  @Input() ticketData: any[] = [];

  constructor() { }
}
