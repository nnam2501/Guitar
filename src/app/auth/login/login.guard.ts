import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginSelector } from 'src/app/core-store/login/login.selector';
import { loginSuccess } from 'src/app/core-store/login/login.actions';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  //hanlde login
  checkLogin(url: string): boolean {
    //check token in localStorage
    if (localStorage.getItem('token')) {
      //save token to store of ngRx when reload page
      var token: any = localStorage.getItem('token');
      this.store.dispatch(loginSuccess({ token: token }));
      return true;
    }
    //navigate to login page if token is not found
    this.router.navigateByUrl('/login');
    return false;
  }
}
