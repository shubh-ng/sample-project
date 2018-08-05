import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  isLoaded:boolean = false;
  loginStatus:string = "Login";
  submitLogin = "Login";
  form;


  isLoggedIn:any;

  onSubmit(user) {
    this.isLoaded = true;
    this.loginStatus = "Logging in....";
    this.submitLogin = "Please wait....";
    this.isLoggedIn = this.loginService.getLoginStatus(user.username, user.password);
    if(this.isLoggedIn.status == 0) {
      this.loginStatus = this.isLoggedIn.status_message;
      this.submitLogin = "Login";
      this.isLoaded = false;
    } else {
      this.loginStatus = this.isLoggedIn.status_message;
      //navigate to admin home
    }
  }  

  ngOnInit() {
    this.form = new FormGroup ({
      username : new FormControl("", Validators.compose ([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')
      ])),
      password : new FormControl("", Validators.compose ([
        Validators.required
      ]))
    });
  }



}
