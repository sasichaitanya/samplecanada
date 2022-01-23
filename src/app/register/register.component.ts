import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerDetails: any;
  constructor(private router: Router) {
    this.registerDetails = {
      name: '',
      email: '',
      age: '',
      password: '',
      agree: false
    }
  }

  onSignIn() {
    let usersArr: any;
    if (sessionStorage.getItem('users')) {
      // @ts-ignore
      usersArr = JSON.parse(sessionStorage.getItem('users'));
    } else {
      usersArr = [];
    }
    usersArr.push(this.registerDetails)
    sessionStorage.setItem('users', JSON.stringify(usersArr))
    this.router.navigateByUrl('login');
  }

  backToLogin() {
    this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
  }

}
