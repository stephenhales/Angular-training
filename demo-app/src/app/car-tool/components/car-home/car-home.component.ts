import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car home';
  cars: Car[] = [];

  constructor() { }

  ngOnInit() {
    this.cars = this
      .cars.concat(
        { id: 0, make: 'Nissan', model: 'Versa', year: 2008, color: 'red', price: 15000},
        { id: 1, make: 'Nissan', model: 'Versa', year: 2008, color: 'blue', price: 15000});
  }

  addCar(newCar: Car) {
    newCar.id = Math.max(...this.cars.map(car => car.id), 0) + 1;
    this.cars = this.cars.concat(newCar);
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(car => car.id !== carId);
  }
}
