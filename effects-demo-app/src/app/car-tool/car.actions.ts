import { Action } from '@ngrx/store';

import { Car } from './models/car';

export enum CarActionTypes {
  REFRESH_REQUEST = '[Car] Refresh Request',
  REFRESH_DONE = '[Car] Refresh Done',
  APPEND_REQUEST = '[Car] Append Request',
  APPEND_DONE = '[Car] Append Done',
  DELETE_REQUEST = '[Car] Delete Request',
  DELETE_DONE = '[Car] Delete Done',
  REPLACE_REQUEST = '[Car] Replace Request',
  REPLACE_DONE = '[Car] Replace Done',
  EDIT = '[Car] Edit',
  CANCEL = '[Car] Cancel'
}

export class RefreshRequestCarAction implements Action {
  type = CarActionTypes.REFRESH_REQUEST;
  constructor() { }
}

export class RefreshDoneCarAction implements Action {
  type = CarActionTypes.REFRESH_DONE;
  constructor(public payload: Car[]) { }
}

export class AppendRequestCarAction implements Action {
  type = CarActionTypes.APPEND_REQUEST;
  constructor(public payload: Car) { }
}

export class AppendDoneCarAction implements Action {
  type = CarActionTypes.APPEND_DONE;
  constructor(public payload: Car) { }
}

export class DeleteRequestCarAction implements Action {
  type = CarActionTypes.DELETE_REQUEST;
  constructor(public payload: number) { }
}

export class DeleteDoneCarAction implements Action {
  type = CarActionTypes.DELETE_DONE;
  constructor(public payload: number) { }
}

export class ReplaceRequestCarAction implements Action {
  type = CarActionTypes.REPLACE_REQUEST;
  constructor(public payload: Car) { }
}

export class ReplaceDoneCarAction implements Action {
  type = CarActionTypes.REPLACE_DONE;
  constructor(public payload: Car) { }
}

export class EditCarAction implements Action {
  type = CarActionTypes.EDIT;
  constructor(public payload: number) { }
}

export class CancelCarAction implements Action {
  type = CarActionTypes.CANCEL;
}

export type CarActionUnion = AppendRequestCarAction | AppendDoneCarAction |
  DeleteRequestCarAction | DeleteDoneCarAction | ReplaceRequestCarAction | ReplaceDoneCarAction |
  EditCarAction | CancelCarAction | RefreshRequestCarAction | RefreshDoneCarAction;

