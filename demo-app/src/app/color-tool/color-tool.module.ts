import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  declarations: [ColorHomeComponent, ColorFormComponent],
  imports: [
    ReactiveFormsModule, HttpClientModule, CommonModule, SharedModule,
  ],
  exports: [
    ColorHomeComponent
  ]
})
export class ColorToolModule { }
