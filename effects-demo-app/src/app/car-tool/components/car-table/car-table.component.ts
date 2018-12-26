import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  public cars: Car[] = [];

  @Input()
  public editCarId;

  @Output()
  public deleteCar = new EventEmitter<number>();

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public saveCar = new EventEmitter<Car>();

  @Output()
  public cancelCar = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

}
