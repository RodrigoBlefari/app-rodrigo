import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: String;
  password: String;
  loginIcon: String;
  loginIconColor: string;
  progressColor : any;
  progressBarValue: any;
  progressBarBuffer:  any;
  lampOpacity: any;
  iconPersonColor: any;
  iconLockColor: any;
  inputBorderPerson: any;
  inputBorderLock: any;
 
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.email = "";
    this.password = "";
    this.liberaBotao();
  }
  logar(){
    this.liberaBotao();
  }
  liberaBotao()
  {
    this.progressBarValue = 0;
    this.progressColor = 'light';
    this.loginIconColor = 'light';
    this.loginIcon = "moon";
    this.progressBarBuffer = 0;
    this.iconPersonColor = "danger";
    this.iconLockColor = "danger";
    
    if(this.email.length > 2){
      this.iconPersonColor = "warning";
      this.progressBarValue += 0.5;
    }
    if(this.password.length > 2){
      this.progressBarValue += 0.5;
      this.iconLockColor = "warning";
    }

    if(this.progressBarValue == 1){
       this.progressColor = 'warning';
       this.loginIconColor = 'warning';
       this.loginIcon = "sunny"
    }
  }
}
