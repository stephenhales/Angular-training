import { Action } from '@ngrx/store';

export enum LeftCounterActions {
  INCREMENT = '[Left Counter] Increment',
  DECREMENT = '[Left Counter] Decrement',
}

export class Increment implements Action {
  type = LeftCounterActions.INCREMENT;
}

export class Decrement implements Action {
  type = LeftCounterActions.DECREMENT;
}

export type LeftCounterActionsUnion = Increment | Decrement;
