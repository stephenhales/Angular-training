import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ViewCarRowComponent } from './components/view-car-row/view-car-row.component';
import { EditCarRowComponent } from './components/edit-car-row/edit-car-row.component';
import { TypeaheadDemoComponent } from './components/typeahead-demo/typeahead-demo.component';

@NgModule({
  declarations: [CarHomeComponent, CarTableComponent, CarFormComponent, ViewCarRowComponent, EditCarRowComponent, TypeaheadDemoComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule,
  ],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
