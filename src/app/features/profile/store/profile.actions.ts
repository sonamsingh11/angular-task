import { createAction, props } from "@ngrx/store";
import { UserProfile } from "../interfaces";

const initProfile = createAction(
    "[Profile] Init",
    props<{ profile: UserProfile }>()
);

export const profileActions = { initProfile };
