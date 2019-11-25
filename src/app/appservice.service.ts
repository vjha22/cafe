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
    public counterId: string,
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

  constructor(private httpClient: HttpClient) { }
  getcounter() {
    console.log("test call");
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001/counters')
  }
  getitem() {
    console.log("test call");
    return this.httpClient.get<Item[]>('http://10.231.139.34:7001/menu')
  }

}
