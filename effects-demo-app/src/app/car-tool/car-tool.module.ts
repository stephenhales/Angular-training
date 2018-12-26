import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { carsReducer } from './reducers/cars.reducer';
import { editCarIdReducer } from './reducers/editCarId.reducer';
import { CarEffects } from './car.effects';

import { SharedModule } from '../shared/shared.module';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarTableRowComponent } from './components/car-table-row/car-table-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarToolComponent } from './components/car-tool/car-tool.component';
import { CarTableEditRowComponent } from './components/car-table-edit-row/car-table-edit-row.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule,
    StoreModule.forRoot({
      cars: carsReducer,
      editCarId: editCarIdReducer
    }),
    EffectsModule.forRoot([CarEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [
    CarTableComponent, CarTableRowComponent, CarFormComponent,
    CarToolComponent, CarTableEditRowComponent
  ],
  exports: [ CarToolComponent ],
})
export class CarToolModule { }
