import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAboutService implements CanActivate {

  constructor() { }

  canActivate(next: ActivatedRouteSnapshot, router: RouterStateSnapshot) {

    console.log(next.url);

    return false;
  }
}
