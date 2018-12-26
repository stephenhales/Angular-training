import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(content: any, contentLength: any): any {

    const contentString = String(content);
    const contentLengthNum = Number(contentLength);

    if (contentString.length > contentLengthNum) {
      return contentString.slice(0, contentLengthNum) + '...';
    } else {
      return contentString;
    }
  }

}
