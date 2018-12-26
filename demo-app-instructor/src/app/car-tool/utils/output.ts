import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatAll } from 'rxjs/operators';
import { flattenDeep } from 'lodash';

export declare type Observables = Observable<any>[] | Array<Observable<any>>[];
export declare type OutputRunFunc = (...observables: Observables) => void;

export const output = <T>(ops: any[]) => {

  const subject$ = new BehaviorSubject<Observable<any>>(of([]));

  const observable$: Observable<T> = subject$.pipe(
    concatAll(),
    ...ops as [],
  );

  const run = (...observables: Observables) => {
    (observables.length ? flattenDeep(observables) : [ of([]) ]).forEach(
      observable => subject$.next(observable));
  };

  return [ observable$, run ] as [ Observable<T>, OutputRunFunc ];
};
