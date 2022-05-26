import { Component, Input } from '@angular/core';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./styles/ticket.scss']
})
export class TicketComponent {

  @Input() ticketType: string = '';
  @Input() ticketID: string = '';

  /*ticketData = [{
    "type": "karta pokładowa",
    "category": "airplane",
    "ticketNumber": "PL-982-M-12",
    "fromShort": "KTW",
    "toShort": "AMS",
    "from": "Katowice",
    "to": "Amsterdam",
    "duration": "02:05 h",
    "main": [
      {
        "first": [
          {
            "category": "Data",
            "value": "2022-05-23"
          }
        ]
      },
      {
        "second": [
          {
            "category": "Odlot",
            "value": "2022-05-23T09:17:08.600Z"
          }
        ]
      },
      {
        "third": [
          {
            "category": "Terminal",
            "value": "T2"
          },
          {
            "category": "Wejście",
            "value": "C12"
          },
          {
            "category": "Miejsce",
            "value": "A20"
          }
        ]
      }
    ],
    "details": [
      {
        "category": "Klasa",
        "value": "Ekonomiczna",
        "more": [
          { "name": "bagaż podręczny (1x8kg)" },
          { "name": "1 x przedmiot osobisty" },
          { "name": "1 x przedmiot osobisty" },
          { "name": "1 x przedmiot osobisty" },
          { "name": "1 x przedmiot osobisty" }
        ]
      },
      {
        "category": "Numer lotu",
        "value": "341"
      }
    ],
    "brand": [
      {
        "logo": "https://www.lot.com/content/dam/lot/lot-com/icons/LOT-logo.coreimg.svg/1619105531814/LOT-logo.svg",
        "name": "LOT Polish Airlines",
        "brandColor": "203675"
      }
    ],
    "provider": [
      {
        "logo": "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png",
        "name": "PayPal",
        "brandColor": "203675"
      }
    ],
    "barCode": "https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png"
  }]*/

  /*ticketData = [{
    "type": "bilet wstępu",
    "ticketNumber": "PL-982-M-12",
    "name": "Avi & Olo GLOBAL TOUR",
    "place": "Warszawa PGE Narodowy",
    "cover": "https://images.unsplash.com/photo-1576967402682-19976eb930f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735",
    "main": [
      {
        "first": [
          {
            "category": "Data",
            "value": "2022-05-23"
          }
        ]
      },
      {
        "second": [
          {
            "category": "Wejście od",
            "value": "2022-05-23T20:00:08.600Z"
          },
          {
            "category": "Start",
            "value": "2022-05-23T21:30:08.600Z"
          }
        ]
      },
    ],
    "details": [
      {
        "category": "Miejsce",
        "value": "Płyta główna",
        "more": [
          { "name": "mapa" }
        ]
      }
    ],
    "brand": [
      {
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/PGE_Narodowy_logo.svg/1200px-PGE_Narodowy_logo.svg.png",
        "name": "PGE Narodowy",
        "brandColor": "203675"
      }
    ],
    "provider": [
      {
        "logo": "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png",
        "name": "PayPal",
        "brandColor": "203675"
      }
    ],
    "barCode": "https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png"
  }]*/

  ticketData = [{
    "type": "rezerwacja",
    "ticketNumber": "PL-982-M-12",
    "name": "Hotel Hilton",
    "place": "Michała Prusa 21, Warszawa",
    "cover": "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    "geolocalization": "value",
    "main": [
      {
        "first": [
          {
            "category": "Data od",
            "value": "2022-05-23"
          },
          {
            "category": "Zameldowanie",
            "value": "2022-05-23T09:17:08.600Z"
          },
          {
            "category": "Data do",
            "value": "2022-05-23"
          }
        ]
      },
      {
        "second": [
          {
            "category": "Pokój",
            "value": "302"
          }
        ]
      }
    ],
    "details": [
      {
        "category": "Rezerwacja",
        "value": "Pokój 3-osobowy",
        "more": [
          { "name": "udogodnienia" }
        ]
      },
      {
        "category": "Cena za noc",
        "value": "341",
        "type": "price"
      }
    ],
    "brand": [
      {
        "logo": "https://fortador.com/wp-content/uploads/2021/09/HILTON-LOGO-WITHUT-BACGROUND.png",
        "name": "Hotel Hilton",
        "brandColor": "203675"
      }
    ],
    "provider": [
      {
        "logo": "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png",
        "name": "PayPal",
        "brandColor": "203675"
      }
    ],
    "barCode": "https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png"
  }]

  constructor() { }

}
