import { Component } from '@angular/core';
import { Store, select, createSelector, createFeatureSelector } from '@ngrx/store';

import { FeatureState } from '../../featureState';
import { Increment, Decrement } from '../../actions';

const leftCounterFeatureSelector = createFeatureSelector<{ rightCounter: FeatureState }, FeatureState>('rightCounter');
const countSelector = createSelector(leftCounterFeatureSelector, (state: FeatureState) => state);

@Component({
  selector: 'app-right-home',
  templateUrl: './right-home.component.html',
  styleUrls: ['./right-home.component.css']
})
export class RightHomeComponent {

  count$ = this.store.pipe(select(countSelector));

  constructor(private store: Store<FeatureState>) { }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
