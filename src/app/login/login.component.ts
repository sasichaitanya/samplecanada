import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-sample',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails: any;

  constructor(private router:Router) { 
    this.loginDetails = {
      email: '',
      password: '',
    }
  }

  onSignIn() {
    console.log('login details are ==========', this.loginDetails)
    // code here
    if (sessionStorage.getItem('users')) {
      // @ts-ignore
      let users = JSON.parse(sessionStorage.getItem('users'))
      // check users here 
    } else {
      alert('no users found')
    }

  }

  register() {
    this.router.navigateByUrl('register');
  }

  ngOnInit(): void {
  }

}
