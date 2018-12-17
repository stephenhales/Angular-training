import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';
  colors = [ 'red', 'blue', 'green' ];

  colorForm: FormGroup;

  // private fb: FormBuilder;

  // construct(fb: FormBuilder){
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.colorForm = this.fb.group({
        newColor: '',
      });
  }

  addColor() {
    this.colors = this.colors.concat(this.colorForm.value.newColor);
  }

}
