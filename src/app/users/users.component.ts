import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any;
  constructor() { 
    // @ts-ignore
    this.usersList = JSON.parse(sessionStorage.getItem('users'))
  }

  ngOnInit(): void {
  }

}
