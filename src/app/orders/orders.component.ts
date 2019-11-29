import { Component, OnInit } from '@angular/core';
import { Orders, Counter, AppserviceService, User } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  constructor(private svc: AppserviceService, private local:LocalStorageService) { }
  orders:Orders[]
  user: User;
  
  ngOnInit() {
    this.user = this.local.get("id")
    console.log("inside ngoninit of orders")
     this.svc.getOrdersByUserId(this.user.id).subscribe(response => this.SuccessfulResponse(response));
     
  }
  SuccessfulResponse(response) {
    console.log("inside successfull response")
    this.orders = response;
    console.log("orders: "+this.orders);
    this.orders.forEach(element => {
      console.log(element)
    });
  }

}
