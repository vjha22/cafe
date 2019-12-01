import { Component, OnInit } from '@angular/core';
import { Subscription, timer, from, interval } from 'rxjs';
import { Orders, AppserviceService, User } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';
import {Howl, Howler} from 'howler';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = 'music-app';
  timeLeft: number=1;
  subscription: Subscription;
  subs: Subscription;
  countDownFlag:boolean = false;
  order : Orders;
  curorder:Orders;
  user:User;
  status:string;
  notification:string = "";
  acounter:number = 0;
  pcounter:number = 0;
  time:number = 10;
  constructor(private svc: AppserviceService, private local:LocalStorageService) { }

  ngOnInit() {
    this.order =  this.local.get("order");
    this.user = this.local.get("id");
    this.oberservableTimer();
  }

  oberservableTimer() {
    // var sound = new Howl({
    //   src: ['/assets/okay-1.wav']
    // });
    const source = timer(1000, 1000);
    this.subscription = source.subscribe(val => {
      //data extraction
      --this.timeLeft;
      console.log('Time left: ' + this.timeLeft);
      if (this.timeLeft === 0) { //check if counter has accepted order
        this.svc.getOrder(this.user.id,this.order.date).subscribe(response => {
          this.success(response)
        });
        this.subscription.unsubscribe()
        console.log('cabooz'); //trigger the boolean flag to show the countdown
        //sound.play();
      }
    });
  }
  success(response){
    console.log(response)
    this.curorder = response;
    this.status = this.curorder.status;
    console.log(this.status)
    if(this.status == "Pending"){
      this.notification = "Your order is placed. Waiting for confirmation."
      var sound = new Howl({
        src: ['/assets/pending.mp3']
      });
      //sound.play()
      if(this.pcounter == 0){
        sound.play();
      }
      this.pcounter = -1;
      console.log("going back")
      this.timeLeft=5;
      this.oberservableTimer();
    }
    else if(this.status=="Ready"){
      var sound = new Howl({
        src: ['/assets/ready.mp3']
      });
      sound.play();
      this.notification = "Your Order is Ready."
    }
    else{
      this.notification = "Your Order is Accepted."
      var sound = new Howl({
        src: ['/assets/accepted.mp3']
      });
      if(this.acounter == 0){
        sound.play();
        this.proceed();
      }
      this.acounter = -1;
      console.log("going back")
      this.timeLeft=5;
      this.oberservableTimer();
    }
  }

  proceed(){
    const src = timer(1000,1000);
    this.subs = src.subscribe(val => {
      //data extraction
      --this.time;
      console.log('Time: ' + this.time);
      if (this.time === 0) { //check if counter has accepted order
        var sound = new Howl({
          src: ['/assets/proceed.mp3']
        });
        sound.play();
        this.subs.unsubscribe()
        console.log('ola'); //trigger the boolean flag to show the countdown
        //sound.play();
      }
    });

  }
}
