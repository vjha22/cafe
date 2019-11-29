import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CountersComponent } from './counters/counters.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginComponent},
  {path:'counters/:id',component:CountersComponent},
  {path:'cart',component:CartComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'orders', component:OrdersComponent},
  {path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
