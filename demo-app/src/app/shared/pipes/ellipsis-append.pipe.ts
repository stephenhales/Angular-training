import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisAppend'
})
export class EllipsisAppendPipe implements PipeTransform {

  transform(value: String, length: any): any {
    return (value.length > length) ?
      String(value).substring(0, Number(length)) + '...'
      : String(value);
  }

}
