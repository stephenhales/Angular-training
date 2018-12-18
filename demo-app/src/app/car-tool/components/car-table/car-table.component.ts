import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../model/Car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars: Car[] = [];

  @Output()
  public removeCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }
}
