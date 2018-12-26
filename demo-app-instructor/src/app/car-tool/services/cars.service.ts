import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Car[]>('http://localhost:4250/cars');
  }

  append(car: Car) {
    return this.httpClient.post<Car>('http://localhost:4250/cars', car);
  }

  replace(car: Car) {
    return this.httpClient
      .put<Car>('http://localhost:4250/cars/' + encodeURIComponent(car.id.toString()), car);
  }

  delete(carId: number) {
    return this.httpClient
      .delete<void>('http://localhost:4250/cars/' + encodeURIComponent(carId.toString()));
  }
}
