import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { ProfilesService } from '../../../profiles.service';

@Injectable()
export class MovieEffects {

  getProfile$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType('[Profile] Init'),
    switchMap(()=> this.profilesService.getProfile()),
  ));

  constructor(
    private actions$: Actions,
    private profilesService: ProfilesService
  ) {}
}
