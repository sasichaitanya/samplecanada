import { Component, OnInit } from '@angular/core';
// service
import { PubsubService } from '../services/pubsub';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private pubsubSvc: PubsubService, private router: Router) {
    this.isUserLoggedIn = false;
    this.subLoginStatus();
    this.checklogin();
   }

  ngOnInit(): void {
  }

  checklogin() {
    let loginStatus = sessionStorage.getItem('loginstatus');
    if (loginStatus === 'loggedIn') {
      this.pubsubSvc.pubLoginStatus('loggedIn')
    } else {
      this.pubsubSvc.pubLoginStatus('loggedOff')
    }
  }

  subLoginStatus() {
    this.pubsubSvc.subLoginStatus()
    .subscribe((result) => {
      if (result === 'loggedIn') {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    })
  }

  logoff() {
    this.pubsubSvc.pubLoginStatus('loggedOff');
    this.router.navigateByUrl('login');
    sessionStorage.removeItem('loginstatus')
  }

}
