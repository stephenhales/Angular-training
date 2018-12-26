import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TempRouterModule } from './routing';
import { TempComponent } from './components/temp/temp.component';

@NgModule({
  imports: [
    CommonModule, TempRouterModule,
  ],
  declarations: [TempComponent]
})
export class TempModule { }
