import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-sample',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails: any;

  constructor() { 
    this.loginDetails = {
      email: '',
      password: '',
    }
  }

  onSignIn() {
    console.log('login details are ==========', this.loginDetails)
    
    debugger
  }

  ngOnInit(): void {
  }

}
