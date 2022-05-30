import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/shared';
import { RoleGuard } from 'src/app/core';
import { DashboardComponent, ReportsComponent, UsersComponent } from './pages';

const adminRoutes = RoutesConfig.routesNames.admin;

const routes: Routes = [
  { path: "", redirectTo: adminRoutes.dashboard, pathMatch: "full" },
  { path: adminRoutes.dashboard, component: DashboardComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'moderator'] } },
  { path: adminRoutes.reports, component: ReportsComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'moderator'] } },
  { path: adminRoutes.users, component: UsersComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'moderator'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RoleGuard]
})
export class AdminRoutingModule { }
