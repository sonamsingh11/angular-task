import { createAction, props } from "@ngrx/store";
import { UserProfile } from "../interfaces";

const initProfile = createAction(
    "[Profile] Init"
);

const setProfile = createAction(
    "[Profile] Set Profile",
    props<{ profile: UserProfile }>()
);

export const profileActions = { initProfile, setProfile};
