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
import { CardComponent, EventCardComponent } from './shared/components';
import { CurrencyChangePipe, EventDatePipe, TodayHoursPipe } from './shared/pipes';
import { PlaceCardComponent } from './shared/components/cards/place-card/place-card.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HotelCardComponent } from './shared/components/cards/hotel-card/hotel-card.component';
import { TransportCardComponent } from './shared/components/cards/transport-card/transport-card.component';
import { TicketCardComponent } from './shared/components/cards/ticket-card/ticket-card.component';


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
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class MainModule { }
