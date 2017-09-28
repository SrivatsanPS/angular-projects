import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() content="";
  // @Output() content = new EventEmitter ();
  // value="";
  // clicked(event){
  //   this.value=event.target.id;
  // }
  constructor() { }

  ngOnInit() {
  }

  color = "";

  @Output() emitter = new EventEmitter();

  clicked(event){
    this.color=event.target.id;
    this.emitter.emit(this.color);
  }

}
