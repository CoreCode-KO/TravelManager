import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule, AuthModule, MainModule, PanelModule, RootModule } from './modules';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AdminModule,
    MainModule,
    PanelModule,
    RootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
