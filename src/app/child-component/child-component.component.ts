import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input()
  inputData:any;

  @Input()
  inputData1:any;
  
  @Output()
  sendEvent = new EventEmitter<any>();

  textInput: string;
  constructor() {
    this.textInput = '';
   }

  ngOnInit(): void {
  }


  onChangeInput(){
    this.sendEvent.emit(this.textInput)
  }

}
