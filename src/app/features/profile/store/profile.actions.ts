import { createAction } from '@ngrx/store';

const initProfile = createAction('[Profile] Init', (response: any) => response.user);

export const profileActions = { initProfile };
