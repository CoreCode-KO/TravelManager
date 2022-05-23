import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: [
    '../../styles/main.scss',
    './tickets.component.scss'
  ]
})
export class TicketsComponent implements OnInit {

  eventData = [{
    "name": "DJ Avi & DJ Olo",
    "date": "2022-05-16T20:36:19.482Z",
    "cover": "https://images.unsplash.com/photo-1557787163-1635e2efb160?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873",
    "price": "120",
    "verified": true
  }]

  placeData = [{
    "name": "Afterek Club",
    "priceL": "120",
    "verified": true,
    "hoursO": [
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
      {
        "openH": "21:00",
        "closeH": "5:00"
      },
    ],
    "photos": [
      { "url": "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" },
      { "url": "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" },
      { "url": "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" }
    ]
  }]

  hotelData = [{
    "name": "Hotel Hilton",
    "cover": "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    "offer": "Pokój 3-osobowy",
    "price": "300",
    "priceType": "za noc",
    "tags": [
      { "name": "basen zewnętrzny" },
      { "name": "basen zewnętrzny" },
      { "name": "basen zewnętrzny" },
      { "name": "basen zewnętrzny" },
      { "name": "basen zewnętrzny" }
    ],
    "rateAvg": 4.7,
    "stars": 3,
    "verified": true
  }]

  transportData = [{
    "type": "airplane",
    "from": "KTW",
    "to": "AMS",
    "duration": "02:05 h",
    "content": [
      {
        "category": "Klasa",
        "value": "Ekonomiczna"
      },
      {
        "category": "Data",
        "value": "2022-05-23"
      },
      {
        "category": "Odlot",
        "value": "2022-05-23T09:17:08.600Z"
      }
    ],
    "tags": [
      { "name": "bagaż podręczny (1x8kg)" },
      { "name": "1 x przedmiot osobisty" },
      { "name": "1 x przedmiot osobisty" },
      { "name": "1 x przedmiot osobisty" },
      { "name": "1 x przedmiot osobisty" }
    ],
    "brand": [
      {
        "logo": "https://cdn.freebiesupply.com/logos/large/2x/lot-2-logo-svg-vector.svg",
        "name": "LOT Polish Airlines",
        "brandColor": "203675"
      }
    ],
    "price": "542.40"
  }]

  ticketData = [{
    "type": "airplane",
    "from": "KTW",
    "to": "AMS",
    "contentSmall": [
      {
        "category": "Data",
        "value": "2022-05-23"
      }
    ],
    "contentBig": [
      {
        "category": "Odlot",
        "value": "2022-05-23T09:17:08.600Z"
      }
    ],
    "brand": [
      {
        "logo": "https://cdn.freebiesupply.com/logos/large/2x/lot-2-logo-svg-vector.svg",
        "name": "LOT Polish Airlines",
        "brandColor": "203675"
      }
    ],
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
