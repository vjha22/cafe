import { Component, OnInit } from '@angular/core';
import { Item, AppserviceService, Counter, Orders, User, ItemQuant } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartt: Item[] = [];
  cost: number = 0;
  counters: Counter;
  counterId: string;
  quantity:number[]=[];
  i: number = 0;
  order:Orders;
  user:User;
  listItems: ItemQuant[]=[];
  items: ItemQuant
  constructor(private svc: AppserviceService, private local: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.cartt = this.svc.getCart();
    this.counterId = this.local.get("counter");
    this.svc.getCounterById(this.counterId).subscribe(res => this.success(res));
    this.cartt.forEach(element => {
      this.quantity[element.itemId]=1;
    });
    // console.log(this.svc.cart)
    // this.cartt = this.svc.cart;
    console.log('printing cart items....')
    this.svc.getCart().forEach(element => {
      console.error('cart item...')
      this.cost = this.cost + parseInt(element.itemPrice) * this.quantity[element.itemId];
    });
    // this.svc.getcounter().subscribe(response => this.success(response));
  }
  remv(i) {
    this.cost = this.cost - parseInt(this.cartt[i].itemPrice)* this.quantity[this.cartt[i].itemId];
    this.cartt.splice(i, 1);
    this.local.clear();
    this.cartt.forEach(element => {
      console.log(element)
    });
    this.local.set("cart", this.cartt)
  }
  success(response) {
    console.log(response)
    this.counters = response;
  }
  inc(item:Item){
    this.quantity[item.itemId]++;
    this.cost = 0;
    this.cartt.forEach(element => {
      console.error('cart item...')
      this.cost = this.cost + parseInt(element.itemPrice) * this.quantity[element.itemId];
    });
  }
  dec(item:Item){
    this.quantity[item.itemId]--;
    if(this.quantity[item.itemId]==0){
      this.remv(this.cartt.indexOf(item))
    }
    this.cost = 0;
    this.cartt.forEach(element => {
      console.error('cart item...')
      this.cost = this.cost + parseInt(element.itemPrice) * this.quantity[element.itemId];
    });
  }
  checkout(){
    this.user = this.local.get("id");
    console.log(this.user);
    // this.cartt.forEach(element => {
    //   console.log(element)
    // });
    console.warn('logging counter...');
    
    console.log(this.counters);
    this.cartt.forEach(element => {
      this.items = new ItemQuant(element,this.quantity[element.itemId]);
      this.listItems.push(this.items);
    });
    this.order = new Orders(this.user, this.counters, this.listItems, this.cost);
    this.local.set("order",this.order);
    this.router.navigate(['payment'])
    //this.svc.placeOrder(this.order).subscribe(response => this.navigator(response));
  }
}
