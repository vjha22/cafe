import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  result:string = "";
  constructor() { }

  ngOnInit() {
  }



  handleEvent(event){
     console.log(event);
     if(event.action == "done"){
       this.result = "Your order is ready."
     }
   }
 
}
