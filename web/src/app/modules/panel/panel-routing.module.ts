import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/configs';
import { RoleGuard } from 'src/app/shared';
import { DashboardComponent, EditorComponent, EventsComponent, SettingsComponent, StatisticsComponent, SupportComponent, UsersComponent } from './pages';

const panelRoutes = RoutesConfig.routesNames.panel;

const routes: Routes = [
  { path: "", redirectTo: panelRoutes.dashboard, pathMatch: "full" },
  { path: panelRoutes.dashboard, component: DashboardComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner', 'editor'] } },
  { path: panelRoutes.statistics, component: StatisticsComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner', 'editor'] } },
  { path: panelRoutes.editor, component: EditorComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner', 'editor'] } },
  { path: panelRoutes.events, component: EventsComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner', 'editor'] } },
  { path: panelRoutes.users, component: UsersComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner'] } },
  { path: panelRoutes.settings, component: SettingsComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'owner'] } },
  { path: panelRoutes.support, component: SupportComponent, canActivate: [RoleGuard], data: { roles: ['boss', 'manager', 'owner', 'editor'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RoleGuard]
})
export class PanelRoutingModule { }
