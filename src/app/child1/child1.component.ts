import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private child1Var: TestsService) { }

  ngOnInit() {
  }

  child1 = this.child1Var.myArray;

}
