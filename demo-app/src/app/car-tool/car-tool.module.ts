import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CarHomeComponent, CarTableComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [
    CarHomeComponent
  ]
})
export class CarToolModule { }
