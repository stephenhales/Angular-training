import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'myUppercase',
  // pure: false,
})
export class MyUppercasePipe implements PipeTransform {

  doUppercase: (value: string) => string;

  constructor() {
    this.doUppercase = memoize(this._doUppercase);
  }

  _doUppercase(value: string) {
    console.log('my uppercase executed');
    return value.toUpperCase();
  }

  transform(value: any): any {
    return (value == null) ? '' : this.doUppercase(value);
  }

}
