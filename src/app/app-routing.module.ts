import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CountersComponent } from './counters/counters.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:CarouselComponent},
  {path:'counters/:id',component:CountersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
