import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { login, loginSuccess, loginFailure } from './login.actions';
@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((user) =>
        this.loginService.getToken(user).pipe(
          map((token) => loginSuccess({ token: Object.values(token)[0] })),
          catchError((error: any) => {
            console.log(error);

            return of(loginFailure({ error }));
          })
        )
      )
    )
  );
  constructor(private actions$: Actions, private loginService: LoginService) {}
}
