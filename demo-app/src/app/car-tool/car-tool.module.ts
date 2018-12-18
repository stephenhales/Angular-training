import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { SharedModule } from '../shared/shared.module';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ViewCarRowComponent } from './components/view-car-row/view-car-row.component';


@NgModule({
  declarations: [
    CarHomeComponent, CarTableComponent, CarFormComponent, ViewCarRowComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [
    CarHomeComponent
  ]
})
export class CarToolModule { }
