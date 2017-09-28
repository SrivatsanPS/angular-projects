import { Component, Input, OnInit} from '@angular/core';
import { TestsService } from './tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TestsService ]
})
export class AppComponent implements OnInit{
  
  // value="";
  // clicked(event){
  //   this.value = event.target.id;
  // }
  // @Output() content="";
  content="gray";
  myFun(e){
    this.content=e;
  }

  constructor(private appVariable: TestsService) { }
  ngOnInit() { 
    this.appVariable.myArray.push("venkata");
    console.log(this.appVariable.myArray);
  }
}
