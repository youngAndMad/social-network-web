import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap(() =>
        this._userService.me().pipe(
          map((userResponseDto) =>
            UserActions.loadUserSuccess({ user: userResponseDto.user })
          ),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private readonly _userService: UserService
  ) {}
}
