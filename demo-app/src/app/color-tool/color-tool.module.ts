import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ColorHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    ColorHomeComponent
  ]
})
export class ColorToolModule { }
