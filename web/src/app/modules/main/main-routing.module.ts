import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/shared';
import { EventsComponent, ExploreComponent, HotelsComponent, PaymentsComponent, TicketsComponent, TransportComponent } from './pages';

const mainRoutes = RoutesConfig.routesNames.main;

const routes: Routes = [
  { path: "", redirectTo: mainRoutes.tickets, pathMatch: "full" },
  { path: mainRoutes.tickets, component: TicketsComponent },
  { path: mainRoutes.transport, component: TransportComponent },
  { path: mainRoutes.events, component: EventsComponent },
  { path: mainRoutes.hotels, component: HotelsComponent },
  { path: mainRoutes.explore, component: ExploreComponent },
  { path: mainRoutes.payments, component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
