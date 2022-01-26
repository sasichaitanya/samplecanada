import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// service
import { PubsubService } from '../services/pubsub';

@Component({
  selector: 'app-login-sample',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails: any;
  

  constructor(private router:Router, private pubsubSvc: PubsubService) { 
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
      let isLoggedin = false;
      for (let i = 0 ; i < users.length ; i++) {
        if (users[i].email === this.loginDetails.email && users[i].password === this.loginDetails.password) {
          isLoggedin = true;
        }
      }
      if (isLoggedin) {
        this.pubsubSvc.pubLoginStatus('loggedIn');
        sessionStorage.setItem('loginstatus', 'loggedIn')
        this.router.navigateByUrl('home');
      } else {
        alert('Invalid login credentials')
      }
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
