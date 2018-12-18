import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: '.view-car-row',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.css']
})
export class ViewCarRowComponent implements OnInit {

  @Output()
  public removeCar = new EventEmitter<number>();

  @Input()
  car: Car;

  constructor() { }

  ngOnInit() { }

  doRemoveCar() {
    this.removeCar.emit(this.car.id);
  }
}
