import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool' ;

  colors = [ 'red', 'blue', 'green' ];

  constructor() { }

  ngOnInit() {
  }

}
