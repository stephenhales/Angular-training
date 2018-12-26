import { LeftCounterActions, LeftCounterActionsUnion } from './actions';

export const leftCounterReducer = (state = 0, action: LeftCounterActionsUnion) => {
  switch (action.type) {
    case LeftCounterActions.INCREMENT:
      return state + 1;
    case LeftCounterActions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
