import { Component, OnInit, NgModule } from '@angular/core';
import { AppserviceService, User } from '../appservice.service';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

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
  logerror: string = "";
  regerror: string = "";
  user: User;
  userForm: FormGroup;
  
  submitted = false;
  entry = false;

  loginSubmitted:boolean  = false;
  signUpSubmitted:boolean = false;



  constructor(private svc: AppserviceService, private local: LocalStorageService, private route: Router, private formbuilder: FormBuilder, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formbuilder.group({

      signUpGroup: this.formbuilder.group({
        name: new FormControl('', [Validators.required]),
        empid: new FormControl('', [Validators.required, Validators.minLength(8)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        cpassword: new FormControl('', [Validators.required, Validators.minLength(5)])
      }),
      loginGroup: this.formbuilder.group({
        logemail: new FormControl('', [Validators.required, Validators.email]),
      logpass: new FormControl('', [Validators.required, Validators.minLength(5)])
      })

    })

  }

  get signUpGroup(){
    return this.userForm.get('signUpGroup');
  }

  get loginGroup(){
    return this.userForm.get('loginGroup')
  }

  logsuccess(response) {
    if (response.password == this.logpass) {
      this.logerror = "";
      this.local.set("id", response);
      console.log("storage user")
      console.log(this.local.get("id"))
      this.route.navigate(['carousel']);
      console.log("no redirect")
    }
    else {
      this.logerror = "Email ID or password incorrect";
    }
  }
  regsuccess(response) {
    console.log("success created user")
    this.local.set("id", this.user);
    console.log(this.local.get("id"))
    this.route.navigate(['carousel'])
  }
  get f() { return (<FormGroup>this.userForm.get('loginGroup')).controls }
  onSubmit1() {
    console.log("inside sub1");
    this.loginSubmitted = true;
    // if(this.userForm.invalid){
    //   console.log("inside if");
    //   return;
    // }
    this.svc.getUserByEmail(this.logemail).subscribe(response => {
      this.logsuccess(response);
    });
    alert('SUccess! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4))

  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
  
  get g() { return (<FormGroup>this.userForm.get('signUpGroup')).controls}

  onSubmit2() {
    console.log("inside sub2");
    this.signUpSubmitted = true;
    if(this.userForm.invalid){
      console.log("inside if");
      return;
    }
    if (this.password == this.cpassword) {
      this.regerror = "";
      this.user = new User(this.empid, this.name, this.password, this.email);
      this.svc.createUser(this.user).subscribe(response => {
        this.regsuccess(response);
      });

      alert('SUccess! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4))

    }
    else {
      this.regerror = "Password does not match confirm password"
    }
  }
}
