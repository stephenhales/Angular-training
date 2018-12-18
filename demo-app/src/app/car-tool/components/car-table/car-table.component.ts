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

  private _sortCache = new Map<string, Car[]>();
  private _lastCars: Car[];

  public sortField = 'id';

  @Input()
  set cars(value: Car[]) {
    if (this._lastCars !== value) {
      this._sortCache.clear();
      this._cars = value;
      this._lastCars = value;
    }
  }

  get cars() {
    return this._cars;
  }

  get sortedCars() {
    if (!this._sortCache.has(this.sortField)) {
      console.log('sorting cars on ' + this.sortField);
      this._sortCache.set(this.sortField, this._cars.concat().sort( (a: Car, b: Car) => {
        if (a[this.sortField] > b[this.sortField]) {
          return 1;
        } else if (a[this.sortField] < b[this.sortField]) {
          return -1;
        } else {
          return 0;
        }
      }));
    }
    return this._sortCache.get(this.sortField);
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
    this.sortField = fieldName;
  }

}
