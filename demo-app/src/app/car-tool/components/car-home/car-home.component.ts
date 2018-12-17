import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car home';

  cars = [
    { id: 0, make: 'Nissan', model: 'Versa', year: 2008, color: 'red', price: 15000},
    { id: 1, make: 'Nissan', model: 'Versa', year: 2008, color: 'blue', price: 15000}
  ];

  carForm: FormGroup;

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

  public addCar() {
    const newCarId = Math.max(...this.cars.map(car => car.id), 0) + 1;

    const newCar = {
      id: newCarId,
      make: this.carForm.value.newMake,
      model: this.carForm.value.newModel,
      year: this.carForm.value.newYear,
      color: this.carForm.value.newColor,
      price: this.carForm.value.newPrice,
    };

    this.cars = this.cars.concat(newCar);
    this.carForm.reset();
  }

  public removeCar(carId: number) {
    this.cars = this.cars.filter(car => car.id !== carId);
  }
}
