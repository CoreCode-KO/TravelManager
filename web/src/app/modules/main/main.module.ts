import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TransportComponent } from './pages/transport/transport.component';
import { EventsComponent } from './pages/events/events.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { SharedModule } from 'src/app/shared';
import { CardComponent } from './components/cards/card/card.component';
import { EventCardComponent } from './components/cards/event-card/event-card.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TransportComponent,
    EventsComponent,
    HotelsComponent,
    ExploreComponent,
    PaymentsComponent,
    CardComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
