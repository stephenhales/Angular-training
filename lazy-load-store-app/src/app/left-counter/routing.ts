import { RouterModule, Routes } from '@angular/router';

import { LeftHomeComponent } from './components/left-home/left-home.component';

const routes: Routes = [
  { path: '', component: LeftHomeComponent },
];

export const LeftCounterRouterModule = RouterModule.forChild(routes);
