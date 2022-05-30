import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketDialogComponent } from '../../ticket/ticket-dialog.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class CardComponent implements OnInit {

  @Input() cardType: string = '';
  @Input() cardData: any[] = [];
  @Output() openTicket = new EventEmitter<Array<any>>();
  @Input() activeTicket: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openTicketData() {
    this.openTicket.emit([{ "ticketType": this.cardData[0]['type'], "ticketID": this.cardData[0]['id'] }]);
  }

  openTicketDialog() {
    this.dialog.open(TicketDialogComponent, {
      data: {
        ticketType: this.cardData[0]['type'],
        ticketID: this.cardData[0]['id'],
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      autoFocus: false
    });
  }

}
