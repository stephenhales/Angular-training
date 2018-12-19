import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAppend'
})
export class MyAppendPipe implements PipeTransform {

  transform(value: any, stringToAppend: any): any {
    return String(value) + String(stringToAppend);
  }

}
