import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, tap, debounceTime, concatAll, mapTo } from 'rxjs/operators';

// import { output, OutputRunFunc } from '../../utils/output';
import { Car } from '../../models/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  refreshCars$ = new BehaviorSubject<Observable<any>>(of([]));

  cars$: Observable<Car[]> = this.refreshCars$.pipe(
    concatAll(),
    debounceTime(250),
    tap(() => this.editCarId = -1),
    switchMap(() => this.carsSvc.all()),
  );


  // cars$: Observable<Car[]>;
  // doRefreshCars: OutputRunFunc;
  editCarId = -1;
  message = new FormControl('');
  constructor(private carsSvc: CarsService) {

    // const [ cars$, doRefreshCars ] = output<Car[]>([
    //   debounceTime(50),
    //   tap(() => this.editCarId = -1),
    //   switchMap(() => this.carsSvc.all())
    // ]);

    // this.cars$ = cars$;
    // this.doRefreshCars = doRefreshCars;
  }
  doRefreshCars(observables?: Observable<any> | Observable<any>[]) {
    [].concat(observables).forEach(observable =>
      this.refreshCars$.next(observable || of([])));
  }
  ngOnInit() {
    this.doRefreshCars();
  }

  doAddCar(car: Car) {

    this.doRefreshCars(this.carsSvc.append(car));

    // this.refreshCars$.next(this.carsSvc.append(car));
    // this.refreshCars$.next(this.carsSvc.replace({ ...car, id: 3 }));

    // this.carsSvc.append(car)
    //   .pipe(mapTo([])).subscribe(() => this.refreshCars$.next([]));

    //   this.carsSvc.append(car),
    //   this.carsSvc.replace({ ...car, id: 3 }),
    // );
    // this.doRefreshCars(this.carsSvc.replace({ ...car, id: 3 }));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doDeleteCar(carId: number) {
    this.doRefreshCars(this.carsSvc.delete(carId));
  }

  doSaveCar(car: Car) {
    this.doRefreshCars(this.carsSvc.replace(car));
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
