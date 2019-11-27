import { Component, OnInit } from '@angular/core';
import { AppserviceService, Counter } from '../appservice.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  counters: Counter[];
  constructor(private svc: AppserviceService) { }

  ngOnInit() {
    this.svc.getcounter().subscribe(response => this.success(response));
  }
  success(response) {
    console.log(response)
    this.counters = response;


  }

}
