import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { CountersComponent } from './counters/counters.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    LoginregComponent,
    CountersComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
