import {
  CarActionTypes, CarActionUnion, EditCarAction,
} from '../car.actions';

export const editCarIdReducer = (state: number = -1, action: CarActionUnion) => {

  switch (action.type) {

    case CarActionTypes.APPEND_REQUEST:
    case CarActionTypes.DELETE_REQUEST:
    case CarActionTypes.REPLACE_REQUEST:
    case CarActionTypes.CANCEL:
      return -1;

    case CarActionTypes.EDIT:
      return (action as EditCarAction).payload;

    default:
      return state;
  }


};
