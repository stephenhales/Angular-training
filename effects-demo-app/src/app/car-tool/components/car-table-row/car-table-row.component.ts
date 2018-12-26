import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'tr.car-table-row',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.css']
})
export class CarTableRowComponent implements OnInit {

  @Input()
  public car: Car;

  @Output()
  public deleteCar = new EventEmitter<number>();

  @Output()
  public editCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
