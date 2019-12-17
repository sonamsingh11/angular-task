import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUsersProfile, getUsersError} from '@store/selectors';
import { UserProfile } from "../../../features/profile/interfaces/user-profile";


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

  users$ = this.store.select(getUsersProfile);
  error$ = this.store.select(getUsersError);

  constructor (private store: Store<AppState>, private router: Router) {}

  handleClick(user: UserProfile) {
    this.store.dispatch(profileActions.initProfile({payload: user}));
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
    this.store.dispatch(profileActions.initUsersProfile());
  }

}
