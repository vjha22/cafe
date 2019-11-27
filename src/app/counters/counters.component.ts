import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService, Item, Counter } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  items: Item[];
  counterId: string;
  counters: Counter[];
  key:string="cart";
  constructor(private route: ActivatedRoute, private svc: AppserviceService,private local:LocalStorageService) { }


  ngOnInit() {
     this.counterId = this.route.snapshot.paramMap.get('id');
    // console.log('counter id ' + this.counterId)
    // console.log(this.counterId)
    this.svc.getitem(this.counterId).subscribe(resp => this.success1(resp));
   //this.svc.getCounterById(this.counterId).subscribe(res => this.success2(res));
    // this.svc.getcounter().subscribe(response => this.success3(response));
  }
  success1(response) {
    console.log(response)
    this.items = response;
  }
  
  add(id:string) {
    // this.items.forEach(element => {
    //   if(element.itemId == id){
    //     this.svc.cart.push(element)
    //   }
    // });
    // console.log(this.svc.cart);

    console.log(id);
    this.svc.getItemById(id).subscribe(data => {this.svc.cart.push(data)});
    console.log(this.svc.cart)  
    this.local.set(this.key,this.svc.cart)  

  }
  success3(response){
    console.log(response)
    this.counters = response;
  }
}
