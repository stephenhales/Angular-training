import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Car } from '../../model/Car';

@Component({
  selector: 'tr.edit-car-row',
  templateUrl: './edit-car-row.component.html',
  styleUrls: ['./edit-car-row.component.css']
})
export class EditCarRowComponent implements OnInit {

  editCarForm: FormGroup;

  @Input()
  car: Car;

  @Output()
  public updateCar = new EventEmitter<Car>();

  @Output()
  public cancelEdit = new EventEmitter<null>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editCarForm = this.fb.group({
      id: this.car.id,
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });
   }

  doSave() {
    this.updateCar.emit({
      ...this.editCarForm.value,
      id: this.car.id
    });
  }

}
