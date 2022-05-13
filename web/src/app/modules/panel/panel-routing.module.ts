import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/configs';
import { DashboardComponent, EditorComponent, EventsComponent, SettingsComponent, StatisticsComponent, SupportComponent, UsersComponent } from './pages';

const panelRoutes = RoutesConfig.routesNames.panel;

const routes: Routes = [
  { path: panelRoutes.dashboard, component: DashboardComponent },
  { path: panelRoutes.statistics, component: StatisticsComponent },
  { path: panelRoutes.editor, component: EditorComponent },
  { path: panelRoutes.events, component: EventsComponent },
  { path: panelRoutes.users, component: UsersComponent },
  { path: panelRoutes.settings, component: SettingsComponent },
  { path: panelRoutes.support, component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
