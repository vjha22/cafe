import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class Item {
  constructor(public itemId: string,
    public itemName: string,
    public itemDesc: string,
    public itemPrice: string,
    public itemCuisine: string,
    public isAvailable: string) {

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
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  cart:Item[]=[]
  a: Item[]=[];
  constructor(private httpClient: HttpClient) { }
  getcounter() {
    console.log("test call counter");
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001/counters')
  }
  getitem(id) {
    console.log("test call item id:"+id);
    console.log("yo: http://10.231.139.34:7001/menu/itemsById/{{id}} :"+this.httpClient.get<Item[]>('http://10.231.139.34:7001/menu/itemsById/{{id}}'))
    return this.httpClient.get<Item[]>('http://10.231.139.34:7001/menu/itemsById/'+id)
  }
  getCounterById(id: string) {
    console.log("test call counterid");
    return this.httpClient.get<Counter>('http://10.231.139.34:7001/counters/'+id)
  }
  getItemById(id: string){
    console.log("item by id called")
    return this.httpClient.get<Item>('http://10.231.139.34:7001/items/'+id)
  }
}
