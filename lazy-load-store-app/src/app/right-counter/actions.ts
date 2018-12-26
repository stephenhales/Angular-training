import { Action } from '@ngrx/store';

export enum RightCounterActions {
  INCREMENT = '[Right Counter] Increment',
  DECREMENT = '[Right Counter] Decrement',
}

export class Increment implements Action {
  type = RightCounterActions.INCREMENT;
}

export class Decrement implements Action {
  type = RightCounterActions.DECREMENT;
}

export type RightCounterActionsUnion = Increment | Decrement;
