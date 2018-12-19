import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  limitInput = new FormControl(10);

  headerText = 'Color tool!';
  colors = [ 'red', 'blue', 'green' ];

  text = 'This string should be limited';

  constructor() { }

  ngOnInit() {

  }

  addColor(color: string) {
    this.colors = this
      .colors.concat(color);
  }

}
