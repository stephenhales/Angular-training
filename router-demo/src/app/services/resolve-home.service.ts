import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveHomeService implements Resolve<number> {

  constructor() { }

  resolve() {
    return 100;
  }
}
