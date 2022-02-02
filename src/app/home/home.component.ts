import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeData: any;
  dataFromChild: string;
  constructor() { 
    this.dataFromChild = '';
    // 
    this.homeData = {
      name: 'SampleProject',
      desc: "Sample"
    };
  }

  ngOnInit(): void {
  }

  receievedEvent(e: any) {
    this.dataFromChild = e;
  }

}
