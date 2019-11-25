import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppserviceService, Counter } from '../appservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
counters: Counter[];
  constructor(private svc: AppserviceService) { }

  ngOnInit() {
    this.svc.getcounter().subscribe(response => this.success(response));
  }
  success(response){
    console.log(response)
    this.counters = response;
  }

}
