import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm: FormGroup;

  @Input()
  buttonText = 'Submit form';

  @Output()
  public submitColor = new EventEmitter<string>();

  // private fb: FormBuilder;

  // construct(fb: FormBuilder){
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      color: '',
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value.color);
  }

}
