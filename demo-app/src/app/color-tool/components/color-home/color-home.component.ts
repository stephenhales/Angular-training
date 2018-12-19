import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  lengthLimitForm: FormGroup;

  headerText = 'Color tool!';
  colors = [ 'red', 'blue', 'green' ];

  text = 'This string should be limited';
  lengthLimit = 5;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.lengthLimitForm = this.fb.group({
      length: this.lengthLimit,
    });
  }

  addColor(color: string) {
    this.colors = this
      .colors.concat(color);
  }

  changeLengthLimit() {
    this.lengthLimit = this.lengthLimitForm.value.length;
  }

}
