import { Routes, RouterModule } from '@angular/router';

import { AuthAboutService } from './services/auth-about.service';
import { ResolveHomeService } from './services/resolve-home.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: { num: ResolveHomeService } },
  { path: 'about/:id', component: AboutComponent, canActivate: [AuthAboutService] },
  { path: '**', redirectTo: '/home' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
