import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'tr.car-table-edit-row',
  templateUrl: './car-table-edit-row.component.html',
  styleUrls: ['./car-table-edit-row.component.css']
})
export class CarTableEditRowComponent implements OnInit {

  @Input()
  public car: Car;

  @Output()
  public saveCar = new EventEmitter<Car>();

  @Output()
  public cancelCar = new EventEmitter<null>();

  public carForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  doSaveCar() {
    this.saveCar.emit({
      ...this.carForm.value,
      id: this.car.id,
    });
  }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: [this.car.make],
      model: [this.car.model],
      year: [this.car.year],
      color: [this.car.color],
      price: [this.car.price],
    });
  }


}
