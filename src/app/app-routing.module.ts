import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CountersComponent } from './counters/counters.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginComponent},
  {path:'counters/:id',component:CountersComponent},
  {path:'cart',component:CartComponent},
  {path:'carousel',component:CarouselComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
