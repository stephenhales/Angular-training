import { RightCounterActions, RightCounterActionsUnion } from './actions';

export const rightCounterReducer = (state = 0, action: RightCounterActionsUnion) => {
  switch (action.type) {
    case RightCounterActions.INCREMENT:
      return state + 1;
    case RightCounterActions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
