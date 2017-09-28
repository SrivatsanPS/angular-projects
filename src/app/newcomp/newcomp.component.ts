import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  test=20;

  increase(){
    this.test=this.test+10;
    
  }
  decrease(){
    
    this.test=this.test-10;
  }
  constructor() { }

  ngOnInit() {
  }

}
