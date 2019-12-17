import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../../apis/api.service';

@Injectable()
export class ProfileEffects {

//   loadUser$ = createEffect(() => this.actions$.pipe(
//     ofType('[Profile] Init'),
//     mergeMap(() => this.apiService.getUser()
//       .pipe(
//         map(user => ({ type: '[Profile] User Loaded Success', payload: user })),
//         catchError(err => of({ type: '[Profile] User Loaded Error', payload: err }))
//       ))
//     )
//   );


  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Profile] Users Init'),
    mergeMap(() => this.apiService.getUsers()
      .pipe(
        map(users => ({ type: '[Profile] Users Loaded Success', payload: users })),
        catchError(err => of({ type: '[Profile] Users Loaded Error', payload: err }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
