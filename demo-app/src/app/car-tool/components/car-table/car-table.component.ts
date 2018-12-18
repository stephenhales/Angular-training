import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { memoize } from 'lodash';
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

  private _lastCars: Car[];

  private _sortField = 'id';

  public sortCars: (sortField: string) => Car[];

  @Input()
  set cars(value: Car[]) {
    if (this._lastCars !== value) {
      this.sortCars = memoize(this._sortCars);

      this._cars = value;
      this._lastCars = value;
    }
  }
  get cars() {
    return this._cars;
  }

  get sortedCars() {
    return this.sortCars(this._sortField);
  }

  @Output()
  public removeCar = new EventEmitter<number>();

  @Output()
  public updateCar = new EventEmitter<Car>();

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public cancelEdit = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }

  // TODO - move to car-home because it's a state.
  setSortField(fieldName: string) {
    this._sortField = fieldName;
  }

  _sortCars(sortField: string) {
    return this._cars.concat().sort( (a: Car, b: Car) => {
      if (a[sortField] > b[sortField]) {
        return 1;
      } else if (a[sortField] < b[sortField]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
