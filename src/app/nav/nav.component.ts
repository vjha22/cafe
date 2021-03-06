import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppserviceService, Counter } from '../appservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
  red(id){
    this.router.navigate(['counters/'+id])
  }

}
