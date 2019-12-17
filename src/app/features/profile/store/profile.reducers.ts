import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
// import { UserProfile } from '../interfaces';

const initialState: ProfileState = { error: null };

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state, action: any) => {
        return { ...state, user: action.payload };
    }),
    on(profileActions.loadSuccessProfile, (state, action: any) => {
        return { ...state, user: action.payload, error: null };
    }),
    on(profileActions.loadErrorProfile, (state, action: any) => {
        return { ...state, error: action.payload };
    }),
    on(profileActions.loadUsersSuccessProfile, (state, action: any) => {
        return { ...state, users: action.payload, error: null };
    }),
    on(profileActions.loadUsersErrorProfile, (state, action: any) => {
        return { ...state, error: action.payload };
    }),
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
