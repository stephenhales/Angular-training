import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'tr.view-car-row',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.css']
})
export class ViewCarRowComponent implements OnInit, DoCheck {

  @Input()
  car: Car;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log('view car row - change detection executed');
  }

  // doDeleteCar() {
  //   this.deleteCar.emit(this.car.id);
  // }

}
