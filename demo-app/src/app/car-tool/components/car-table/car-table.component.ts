import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  carEditId = -1;

  private _cars: Car[] = [];

  @Input()
  set cars(value: Car[]) {
    this._cars = value;
  }

  get cars() {
    return this._cars;
  }

  get sortedCars() {
    console.log('sorting cars on ' + this.sortField);
    return this._cars.concat().sort( (a: Car, b: Car) => {
      if (a[this.sortField] > b[this.sortField]) {
        return 1;
      } else if (a[this.sortField] < b[this.sortField]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  @Output()
  public removeCar = new EventEmitter<number>();

  @Output()
  public updateCar = new EventEmitter<Car>();

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public cancelEdit = new EventEmitter<null>();

  public sortField = 'id';

  constructor() { }

  ngOnInit() { }

  // TODO - move to car-home because it's a state.
  setSortField(fieldName: string) {
    this.sortField = fieldName;
  }

}
