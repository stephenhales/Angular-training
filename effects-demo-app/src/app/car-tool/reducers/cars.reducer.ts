import {
  CarActionTypes, CarActionUnion, RefreshDoneCarAction,
} from '../car.actions';

import { Car } from '../models/car';

export const carsReducer = (state: Car[] = [], action: CarActionUnion) => {

  switch (action.type) {

    case CarActionTypes.REFRESH_REQUEST:
    case CarActionTypes.APPEND_REQUEST:
    case CarActionTypes.APPEND_DONE:
    case CarActionTypes.REPLACE_REQUEST:
    case CarActionTypes.REPLACE_DONE:
    case CarActionTypes.DELETE_REQUEST:
    case CarActionTypes.DELETE_DONE:
      return state;
    case CarActionTypes.REFRESH_DONE:
      return (action as RefreshDoneCarAction).payload;
    default:
      return state;
  }


};
