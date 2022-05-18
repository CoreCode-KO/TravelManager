import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  eventData = [{
    "name": "DJ Avi & DJ Olo",
    "date": "2022-05-16T20:36:19.482Z",
    "cover": "https://images.unsplash.com/photo-1557787163-1635e2efb160?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873",
    "price": "120",
    "verified": true
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
