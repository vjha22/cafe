import { Component, OnInit, NgModule } from '@angular/core';
import { AppserviceService, User } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logemail: string = "";
  logpass: string = "";
  name: string = "";
  empid: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = ""
  logerror:string = "";
  regerror:string = "";
  user:User;
  
  
  constructor(private svc:AppserviceService, private local: LocalStorageService, private route:Router) { }

  ngOnInit() {
 
  }

  login() {
    this.svc.getUserByEmail(this.logemail).subscribe(response => {
      this.logsuccess(response);
    });
  }

  register() {
    if(this.password == this.cpassword){
      this.regerror="";
      this.user = new User(this.empid,this.name,this.password,this.email);
      this.svc.createUser(this.user).subscribe(response => {
       this.regsuccess(response);
      });
    }
    else{
      this.regerror="Password does not match confirm password"
    }
    
  }
  logsuccess(response){
    if (response.password == this.logpass){
      this.logerror="";
      this.local.set("id",response);
      console.log(this.local.get("id"))
      this.route.navigate(['carousel']);
      console.log("no redirect")
    }
    else{
      this.logerror = "Email ID or password incorrect";
    }
  }
  regsuccess(response){
    console.log("success created user")
    this.local.set("id",this.user);
    this.route.navigate(['carousel'])
  }
}
