import { Component } from '@angular/core';
import { PubsubService } from './services/pubsub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-canada';
  constructor( private pubsubSvc: PubsubService) {
  }

  
}
