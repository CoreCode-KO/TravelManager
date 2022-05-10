import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';

const routes: Routes = [
  {
    path: RoutesConfig.basePaths.auth,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: RoutesConfig.basePaths.main,
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: RoutesConfig.basePaths.admin,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: RoutesConfig.basePaths.panel,
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
