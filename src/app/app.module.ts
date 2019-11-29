import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselComponent } from './carousel/carousel.component';
import { CountersComponent } from './counters/counters.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { TimerComponent } from './timer/timer.component';
import { CountdownModule } from 'ngx-countdown';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    CountersComponent,
    CartComponent,
    PaymentComponent,
    LoginComponent,
    NavbarComponent,
    TimerComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    CountdownModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PaymentComponent }
    ]),
    AppRoutingModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
