import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { profileActions } from '@store/actions';

@Injectable()
export class ProfileEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect()
  loadProfile = this.actions$.pipe(
    ofType(profileActions.initProfile),
    switchMap(action => {
      return this.http.get('https://randomuser.me/api/').pipe(
        map((response: any) => ({ type: '[Profile] Init', user: response.results[0] }))
      );
    }),

  );

}
