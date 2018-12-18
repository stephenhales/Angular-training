import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: 'tr.view-car-row',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.css']
})
export class ViewCarRowComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  public removeCar = new EventEmitter<number>();

  @Output()
  public editCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  doEditCar() {
    this.editCar.emit(this.car.id);
  }

  doRemoveCar() {
    this.removeCar.emit(this.car.id);
  }
}
