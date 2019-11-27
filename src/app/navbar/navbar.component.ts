import { Component, OnInit } from '@angular/core';
import { AppserviceService, Counter } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  counters: Counter[];
  constructor(private router: Router, private svc: AppserviceService) { }

  ngOnInit() {
    this.svc.getcounter().subscribe(response => this.success(response));
  }
  success(response){
    console.log(response)
    this.counters = response;
  }
  redirect(){
    this.router.navigate(['carousel'])
  }

}
