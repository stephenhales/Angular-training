import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public colorForm: FormGroup;

  @Input()
  buttonText = 'Submit Form';

  @Output()
  public submitColor = new EventEmitter<string>();

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
