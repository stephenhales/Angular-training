import { Component } from '@angular/core';
import { Store, select, createSelector, createFeatureSelector } from '@ngrx/store';

import { FeatureState } from '../../featureState';
import { Increment, Decrement } from '../../actions';

const leftCounterFeatureSelector =
  createFeatureSelector<{ leftCounter: FeatureState }, FeatureState>('leftCounter');
const countSelector = createSelector(leftCounterFeatureSelector, (state: FeatureState) =>
  state);

@Component({
  selector: 'app-left-home',
  templateUrl: './left-home.component.html',
  styleUrls: ['./left-home.component.css']
})
export class LeftHomeComponent {

  count$ = this.store.pipe(select(countSelector));

  constructor(private store: Store<FeatureState>) { }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
