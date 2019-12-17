import { createAction, props } from '@ngrx/store';

const initUsersProfile = createAction('[Profile] Users Init');
const loadUsersSuccessProfile = createAction('[Profile] Users Loaded Success');
const loadUsersErrorProfile = createAction('[Profile] Users Loaded Error');

// const initProfile = createAction('[Profile] Init');
const initProfile = createAction('[Profile] Init', props<{ payload: any }>());
const loadSuccessProfile = createAction('[Profile] User Loaded Success');
const loadErrorProfile = createAction('[Profile] User Loaded Error');

export const profileActions = { initProfile, loadSuccessProfile, loadErrorProfile, initUsersProfile, loadUsersSuccessProfile, loadUsersErrorProfile };
