enum ErrorActionTypes {
  RAISE_ERROR = '[Error] Raise Error',
}

export class RaiseErrorAction {
  type = ErrorActionTypes.RAISE_ERROR;
  constructor(public payload: string) { }
}
