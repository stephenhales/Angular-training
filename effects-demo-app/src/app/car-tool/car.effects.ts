import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  CarActionTypes, RefreshDoneCarAction, RefreshRequestCarAction,
  AppendRequestCarAction, ReplaceRequestCarAction, DeleteRequestCarAction,
  CarActionUnion,
} from './car.actions';
import { RaiseErrorAction } from './error.actions';

import { Car } from './models/car';

@Injectable({
  providedIn: 'root'
})
export class CarEffects {

  constructor(private httpClient: HttpClient, private actions$: Actions<CarActionUnion>) { }

  @Effect()
  refresh$: Observable<RefreshDoneCarAction | RaiseErrorAction> = this.actions$.pipe(
    ofType(CarActionTypes.REFRESH_REQUEST),
    mergeMap(() =>
      this.httpClient
        .get<Car[]>('http://localhost:3050/cars')
        .pipe(
          map(cars => new RefreshDoneCarAction(cars)),
          catchError(err => {
            console.error(err);
            return of(new RaiseErrorAction(err.message));
          }),
        ),
  ));

  @Effect()
  append$: Observable<RefreshRequestCarAction | RaiseErrorAction> = this.actions$.pipe(
    ofType(CarActionTypes.APPEND_REQUEST),
    mergeMap(action =>
      this.httpClient.post(
        'http://localhost:3050/cars',
        (action as AppendRequestCarAction).payload,
      )
        .pipe(
          map(() => new RefreshRequestCarAction()),
          catchError(err => {
            console.error(err);
            return of(new RaiseErrorAction(err.message));
          }),
        )),
  );

  @Effect()
  replace$: Observable<RefreshRequestCarAction | RaiseErrorAction> = this.actions$.pipe(
    ofType(CarActionTypes.REPLACE_REQUEST),
    mergeMap((action: ReplaceRequestCarAction) =>
      this.httpClient.put(
        'http://localhost:3050/cars/' + encodeURIComponent(action.payload.id.toString()),
        action.payload,
      )
        .pipe(
          map(() => new RefreshRequestCarAction()),
          catchError(err => {
            console.error(err);
            return of(new RaiseErrorAction(err.message));
          }),
        )));

  @Effect()
  delete$: Observable<RefreshRequestCarAction | RaiseErrorAction> = this.actions$.pipe(
    ofType(CarActionTypes.DELETE_REQUEST),
    mergeMap((action: DeleteRequestCarAction) =>
      this.httpClient.delete(
        'http://localhost:3050/cars/' + encodeURIComponent(action.payload.toString()),
      )
        .pipe(
          map(() => new RefreshRequestCarAction()),
          catchError(err => {
            console.error(err);
            return of(new RaiseErrorAction(err.message));
          }),
        )));
}
