import { RouterModule, Routes } from '@angular/router';

import { RightHomeComponent } from './components/right-home/right-home.component';

const routes: Routes = [
  { path: '', component: RightHomeComponent },
];

export const RightCounterRouterModule = RouterModule.forChild(routes);
