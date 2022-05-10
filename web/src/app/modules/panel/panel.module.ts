import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { EditorComponent } from './pages/editor/editor.component';
import { EventsComponent } from './pages/events/events.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SupportComponent } from './pages/support/support.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    EditorComponent,
    EventsComponent,
    UsersComponent,
    SettingsComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
