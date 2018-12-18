import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars = [];

  @Output()
  public removeCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  doRemoveCar(carId: number) {
    this.removeCar.emit(carId);
  }

}
