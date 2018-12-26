import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'left-counter' },
  { path: '', component: HomeComponent, outlet: 'right-counter' },
  // { path: 'temp', loadChildren: './temp/temp.module#TempModule', outlet: 'left-counter' },
  // { path: 'temp', loadChildren: './temp/temp.module#TempModule', outlet: 'right-counter' },
  {
    // http://localhost:4200/#/(left-counter:counter//right-counter:counter)
    // the path is the value after the colon
    path: 'counter',
    loadChildren: './left-counter/left-counter.module#LeftCounterModule',
    // the outlet is the value before the colon
    outlet: 'left-counter'
  },
  { path: 'counter',
  loadChildren: './right-counter/right-counter.module#RightCounterModule',
  outlet: 'right-counter' },
];

export const AppRouterModule = RouterModule.forRoot(routes, { useHash: true });
