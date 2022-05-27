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
import { CardComponent, EventCardComponent, HotelCardComponent, PlaceCardComponent, TicketCardComponent, TransportCardComponent } from './shared/components';
import { CurrencyChangePipe, EventDatePipe, TodayHoursPipe } from './shared/pipes';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TicketComponent } from './shared/components/ticket/ticket.component';
import { TransportTicketComponent } from './shared/components/ticket/transport-ticket/transport-ticket.component';
import { EventTicketComponent } from './shared/components/ticket/event-ticket/event-ticket.component';
import { NeutralTicketComponent } from './shared/components/ticket/neutral-ticket/neutral-ticket.component';
import { TicketDialogComponent } from './shared/components/ticket/ticket-dialog.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TransportComponent,
    EventsComponent,
    HotelsComponent,
    ExploreComponent,
    PaymentsComponent,
    CardComponent,
    EventCardComponent,
    EventDatePipe,
    CurrencyChangePipe,
    PlaceCardComponent,
    TodayHoursPipe,
    HotelCardComponent,
    TransportCardComponent,
    TicketCardComponent,
    TicketComponent,
    TicketDialogComponent,
    TransportTicketComponent,
    EventTicketComponent,
    NeutralTicketComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class MainModule { }
