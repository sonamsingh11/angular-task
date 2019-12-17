import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {
    return user;

});

export const getUserError = createSelector(getProfileState, state => state.error);

export const getUsersProfile = createSelector(getProfileState, ({ users }) => {
    return users;
});
export const getUsersError= createSelector(getProfileState, state => state.error);
