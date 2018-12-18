import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  carEditId: number = null;

  @Input()
  cars: Car[] = [];

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

}
