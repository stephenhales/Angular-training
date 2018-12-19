import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
  // pure: false,
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any): any {
    return (value == null) ? '' : String(value).toUpperCase();
  }

}
