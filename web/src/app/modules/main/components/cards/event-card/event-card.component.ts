import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['../styles/card.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
