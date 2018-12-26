import { Injectable } from '@angular/core';

let counter = 0;

@Injectable()
export class LogService {

  constructor() {}

  log(msg: string) {
    console.log(msg);
  }

}

export interface IWidgetsService {
  counter: number;
  doIt: () => void;
}

@Injectable()
export class WidgetsService implements IWidgetsService {

  counter: number;

  constructor(private ls: LogService) {
    this.counter = counter++;
    this.ls.log('created a new widgets service: ' + this.counter);
  }

  doIt() {
    this.ls.log('called doit on ' + this.counter);
  }

}
