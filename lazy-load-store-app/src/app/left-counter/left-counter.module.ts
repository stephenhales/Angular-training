import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule  } from '@ngrx/store';

import { LeftCounterRouterModule } from './routing';
import { leftCounterReducer } from './reducers';
import { LeftHomeComponent } from './components/left-home/left-home.component';

@NgModule({
  imports: [
    CommonModule,
    LeftCounterRouterModule,
    StoreModule.forFeature('leftCounter', leftCounterReducer),
  ],
  declarations: [LeftHomeComponent]
})
export class LeftCounterModule { }
