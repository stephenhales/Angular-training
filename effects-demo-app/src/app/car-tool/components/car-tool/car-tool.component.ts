import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AppendRequestCarAction, EditCarAction, CancelCarAction,
  DeleteRequestCarAction, ReplaceRequestCarAction, RefreshRequestCarAction
} from '../../car.actions';

import { AppState } from '../../appState';

import { Car } from '../../models/car';

@Component({
  selector: 'car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public cars$: Observable<Car[]>;
  public editCarId$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cars$ = this.store.pipe(select('cars'));
    this.editCarId$ = this.store.pipe(select('editCarId'));
  }

  ngOnInit() {
    this.store.dispatch(new RefreshRequestCarAction());
  }

  doEditCar(carId: number) {
    this.store.dispatch(new EditCarAction(carId));
  }

  doDeleteCar(carId: number) {
    this.store.dispatch(new DeleteRequestCarAction(carId));
  }

  doCancelCar() {
    this.store.dispatch(new CancelCarAction());
  }

  doSaveCar(car: Car) {
    this.store.dispatch(new ReplaceRequestCarAction(car));
  }

  doAddCar(car: Car) {
    this.store.dispatch(new AppendRequestCarAction(car));
  }

}
