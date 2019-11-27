import { Component, OnInit } from '@angular/core';
import { Item, AppserviceService, Counter } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartt: Item[]=[];
  cost: number=0;
  counters: Counter[];
  constructor(private svc: AppserviceService,private local:LocalStorageService) { }

  ngOnInit() {
    this.cartt=this.local.get("cart");
   // console.log(this.svc.cart)
   // this.cartt = this.svc.cart;
   // this.cartt.forEach(element => {
    //  this.cost=this.cost + parseInt(element.itemPrice)
  //  });
   // this.svc.getcounter().subscribe(response => this.success(response));
  }
  remv(i){
    this.cost = this.cost - parseInt(this.cartt[i].itemPrice);
    this.svc.cart.splice(i,1);
  }
  success(response){
    console.log(response)
    this.counters = response;
  }

}
