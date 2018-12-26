import { Car } from './models/car';

export interface AppState {
  cars: Car[];
  editCarId: number;
}
