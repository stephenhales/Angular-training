import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/Car';

@Injectable({
  // this should always be in root (for now). Angular issue...
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  const url = 'http://localhost:4250/cars';

  all() {
    return this.httpClient.get<Car[]>(this.url);
  }

  create(car: Car) {
    return this.httpClient.post<Car>(this.url, car);
  }

  update(car: Car) {
    return this.httpClient.put<Car>(this.url + encodeURIComponent(car.id.toString()), car);
  }

  delete(car: Car) {
    return this.httpClient.delete<Car>(this.url + encodeURIComponent(car.id.toString()));
  }
}
