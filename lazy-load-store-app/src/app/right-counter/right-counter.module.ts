import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule  } from '@ngrx/store';

import { RightCounterRouterModule } from './routing';
import { rightCounterReducer } from './reducers';
import { RightHomeComponent } from './components/right-home/right-home.component';

@NgModule({
  imports: [
    CommonModule,
    RightCounterRouterModule,
    StoreModule.forFeature('rightCounter', rightCounterReducer),
  ],
  declarations: [RightHomeComponent]
})
export class RightCounterModule { }
