import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/configs';
import { DashboardComponent, ReportsComponent, UsersComponent } from './pages';

const adminRoutes = RoutesConfig.routesNames.admin;

const routes: Routes = [
  { path: adminRoutes.dashboard, component: DashboardComponent },
  { path: adminRoutes.reports, component: ReportsComponent },
  { path: adminRoutes.users, component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
