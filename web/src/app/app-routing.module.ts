import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';
import { AuthGuard, RoleGuard } from './shared';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  {
    path: RoutesConfig.basePaths.auth,
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: RoutesConfig.basePaths.main,
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: RoutesConfig.basePaths.admin,
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: RoutesConfig.basePaths.panel,
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
