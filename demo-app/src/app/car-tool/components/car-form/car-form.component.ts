import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Car } from '../../model/Car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;

  @Output()
  public submitCar = new EventEmitter<Car>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      newMake: '',
      newModel: '',
      newYear: '1900',
      newColor: '',
      newPrice: '0'
    });
  }

  doSubmitCar() {
    const newCar = {
      make: this.carForm.value.newMake,
      model: this.carForm.value.newModel,
      year: this.carForm.value.newYear,
      color: this.carForm.value.newColor,
      price: this.carForm.value.newPrice,
    };

    this.submitCar.emit(newCar);
  }
}
