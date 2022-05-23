import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
