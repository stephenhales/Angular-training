import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  carEditId: number = null;

  headerText = 'Car home';

  cars: Car[] = [];

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    return this.carService.all().subscribe(cars => {
      this.cars = cars;
    });

    // subscriber.unsubscribe();
  }

  doAddCar(newCar: Car) {
    this.carService.create({
      ...newCar,
      id: Math.max(...this.cars.map(car => car.id), 0) + 1,
    }).subscribe(x => this.getCars());
  }

  doRemoveCar(carId: number) {
    this.cars = this.cars.filter(car => car.id !== carId);
  }

  doUpdateCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    const newCars = this.cars.concat();
    newCars[carIndex] = car;
    this.cars = newCars;
    this.doCancelEdit();
  }

  doEditCar(carId: number) {
    this.carEditId = carId;
  }

  doCancelEdit() {
    this.carEditId = null;
  }

}
