import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    CarHomeComponent
  ]
})
export class CarToolModule { }
