import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  pure: true,
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: any): any {
    return String(value).toUpperCase();
  }

}
