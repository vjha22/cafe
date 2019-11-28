import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LocalStorageService } from 'angular-web-storage';

export class Item {
  constructor(public itemId: string,
    public itemName: string,
    public itemDesc: string,
    public itemPrice: string,
    public itemCuisine: string,
    public itemQuantity: number) {

  }
}
export class Counter {
  constructor(
    public id: string,
    public counterName: string,
    public counterOwner: string,
    public counterEmail: string,
    public counterPassword: string) {

  }

}
export class User{
  constructor(
    public id:string,
    public name:string,
    public password:string,
    public email:string
    ){}
}
export class Orders{
  constructor(
    public user:User,
    public counter:Counter,
    public items:Item[],
    public total:number
    ){

  }
}
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  cart: Item[] = []
  a: Item[] = [];
  
  constructor(private httpClient: HttpClient, private local: LocalStorageService) { 
    // localStorage.setItem("cart", JSON.stringify(this.cart));
  }


  addItemToCart(item:Item){
    // let data = JSON.parse(localStorage.getItem("cart"))
    // this.cart = data;
    this.cart.push(item);
    this.local.set("cart",this.cart)
    console.error('printing cart from service...')
    console.log(this.cart)
    // localStorage.setItem("cart", JSON.stringify(this.cart));
    // console.error(JSON.parse(localStorage.getItem("cart")))
  }

  getCart(){
    // console.log('printing cart data from the getCart()')
    // console.log(this.cart)
    // //this.cart = JSON.parse(localStorage.getItem("cart"))
    return this.local.get("cart");
  }

  getcounter() {
    console.log("test call counter");
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001/counters')
  }
  getitem(id) {
    console.log("test call item id:" + id);
    console.log("yo: http://10.231.139.34:7001/menu/itemsById/{{id}} :" + this.httpClient.get<Item[]>('http://10.231.139.34:7001/menu/itemsById/{{id}}'))
    return this.httpClient.get<Item[]>('http://10.231.139.34:7001/menu/itemsById/' + id)
  }
  getCounterById(id: string) {
    console.log("test call counterid");
    return this.httpClient.get<Counter>('http://10.231.139.34:7001/counters/' + id)
  }
  getItemById(id: string) {
    console.log("item by id called")
    return this.httpClient.get<Item>('http://10.231.139.34:7001/items/' + id)
  }
  createUser(u:User){
    console.log("user create")
    return this.httpClient.post<User>('http://10.231.136.18:5000/users',u)
  }
  getUserByEmail(email:string){
    console.log("get user by email")
    return this.httpClient.get<User>('http://10.231.136.18:5000/users/'+email)
  }
  placeOrder(o:Orders){
    console.log("placing order")
    return this.httpClient.post<Orders>('http://10.231.136.18:5000/orders',o)
  }
  getOrdersByUserId(id:string){
    console.log("getting orders");
    return this.httpClient.get<Orders[]>('http://10.231.136.18:5000/ordersbyuser/'+id)
  }
}
