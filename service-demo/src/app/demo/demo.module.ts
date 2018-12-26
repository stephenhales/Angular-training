import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsService, LogService } from './services/widgets.service';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [
    CommonModule
  ],
  providers: [
    LogService,
    // {
    //   provide: WidgetsService,
    //   // useClass: WidgetsService,
    //   // useValue: { doIt() { return console.log('called from value'); } },
    //   useFactory: (logSvc: LogService) => new WidgetsService(logSvc),
    //   deps: [ LogService ],
    // },
  ],
  exports: [FirstComponent],
})
export class DemoModule { }
