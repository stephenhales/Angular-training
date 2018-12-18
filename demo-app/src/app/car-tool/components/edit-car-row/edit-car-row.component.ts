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
      editId: this.car.id,
      editMake: this.car.make,
      editModel: this.car.model,
      editYear: this.car.year,
      editColor: this.car.color,
      editPrice: this.car.price,
    });
   }

  doSave() {
    const updateCar = {
      id: this.editCarForm.value.editId,
      make: this.editCarForm.value.editMake,
      model: this.editCarForm.value.editModel,
      year: this.editCarForm.value.editYear,
      color: this.editCarForm.value.editColor,
      price: this.editCarForm.value.editPrice,
    };

    this.updateCar.emit(updateCar);
  }

}
