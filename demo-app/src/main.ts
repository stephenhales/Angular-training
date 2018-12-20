import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Observables demo
/*
import { interval } from 'rxjs';
import { Observable, Observer } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

const nums: Observable<number> = Observable.create( (observer: Observer<number>) => {

  let counter = 0;

  setInterval(() => {
    observer.next(counter++);
  }, 500);
});

nums.subscribe((num) => {
  console.log(num);
});

nums.pipe(
  map(x => x * 2),
  filter(x => x > 10),
  take(5)
).subscribe((num) => {
  console.log('pipe: ' + num);
});

const numsTwo: Observable<number> = Observable.create( (observer: Observer<number>) => {

  let counter = 0;

  const h = setInterval(() => {
    if (counter > 10) {
      observer.error('number is too high');
    }
    observer.next(counter++);
  }, 500);

  setTimeout(() => {
    clearInterval(h);
    observer.complete();
  }, 2000);
});

numsTwo.subscribe((num) => {
  console.log('two: ' + num);
});

interval(500).pipe(map(x => x * 2), take(5)).subscribe(x => console.log('interval: ' + x), null, () => {
  console.log('interval complete');
});
*/
