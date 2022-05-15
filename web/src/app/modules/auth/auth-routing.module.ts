import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from 'src/app/configs';
import { AuthGuard } from './auth.guard';
import { SignInPageComponent, SignUpPageComponent } from './pages';

const authRoutes = RoutesConfig.routesNames.auth;

const routes: Routes = [
  { path: "", redirectTo: authRoutes.signIn, pathMatch: "full" },
  { path: authRoutes.signUp, component: SignUpPageComponent },
  { path: authRoutes.signIn, component: SignInPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
