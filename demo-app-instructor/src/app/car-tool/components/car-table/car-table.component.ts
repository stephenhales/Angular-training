import { Component, OnInit, Input, Output, EventEmitter, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { memoize } from 'lodash';

import { Car } from '../../models/Car';

@Component({
  selector: '.car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableComponent implements OnInit, DoCheck {

  @Input()
  public editCarId = -1;

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public deleteCar = new EventEmitter<number>();

  @Output()
  public saveCar = new EventEmitter<Car>();

  @Output()
  public cancelCar = new EventEmitter<void>();

  @Input()
  public sortField = 'id';

  private _cars: Car[] = [];

  public sortCars: (sortField: string) => Car[] = () => [];

  @Input()
  set cars(value: Car[]) {
    console.log(value);
    if (Array.isArray(value) && this._cars !== value) {
      this.sortCars = memoize(this._sortCars);
      this._cars = value;
    }
  }

  get cars() {
    return this._cars;
  }

  _sortCars(sortField: string) {
    console.log('sorting cars on ' + sortField + '...');
    return this._cars.concat().sort( (a: Car, b: Car) => {
      if (a[sortField] > b[sortField]) {
        return 1;
      } else if (a[sortField] < b[sortField]) {
        return -1;
      } else {
        return 0;
      }
    } );
  }

  get sortedCars() {
    return this.sortCars(this.sortField);
  }




  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log('car table - change detection executed');
  }

  setSortField(fieldName: string) {
    this.sortField = fieldName;
  }


}


// const memoize = (originalFn) => {

//   const cache = new WeakMap();

//   return (...params) => {

//     if (cache.has(params[0])) {
//       return cache.get(params[0]);
//     }

//     const newValue = originalFn(...params);

//     cache.set(params[0], newValue);

//     return newValue;

//   };

// };

// const add = (a,b) => a+b;

// const memoAdd = memoize(add);

// memoAdd(1,2);
