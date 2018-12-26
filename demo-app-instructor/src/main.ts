import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { interval, of } from 'rxjs';
// import { map, filter, take, tap, concat, merge } from 'rxjs/operators';


// interval(500).pipe(map(x => x * 2), take(5)).subscribe(x => console.log(x), null, () => {
//   console.log('interval complete');
// });

// const nums = interval(500).pipe(map(x => x * -1));
// const nums2 = interval(200);

// nums.pipe(merge(nums2)).subscribe(x => console.log(x));

// const nums$: Observable<number> = Observable.create( (observer: Observer<number>) => {

//   let counter = 0;

//   const h = setInterval(() => {
//     if (counter > 10) {
//       observer.error('number is too high');
//     }

//     if (observer.closed) {
//       clearInterval(h);
//       observer.complete();
//     }

//     observer.next(counter++);
//   }, 500);


// });

// nums$
// .pipe(
//   map(x => x * 2),
//   tap(x => console.log('tap: ' + x)),
//   filter(x => x > 10),
//   take(5),
// )
// .subscribe((num) => {
//   console.log(num);
// }, error => {
//   console.log(error);
// }, () => {
//   console.log('complete');
// });
