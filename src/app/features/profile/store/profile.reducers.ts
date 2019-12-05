import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
// import { UserProfile } from '../interfaces';
import { profileActions } from '@store/actions';


const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state, { user }) => {

        return { ...state, user: user };


    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer(state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
