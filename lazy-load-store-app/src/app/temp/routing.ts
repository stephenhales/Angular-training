import { RouterModule, Routes } from '@angular/router';

import { TempComponent } from './components/temp/temp.component';

const routes: Routes = [
  { path: '', component: TempComponent },
];

export const TempRouterModule = RouterModule.forChild(routes);
