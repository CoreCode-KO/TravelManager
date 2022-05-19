import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule, AuthModule, MainModule, PanelModule, RootModule } from './modules';
import { MobileNavbarComponent, NavigationComponent, SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AdminModule,
    MainModule,
    PanelModule,
    RootModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
