import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { Subscription } from 'rxjs';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles-page.component.html'
})
export class ProfilesComponent implements OnInit, OnDestroy {
    public get users() {
        return this.profileService.allUsers;
    }

    subscription: Subscription = null;

    user$ = this.store.select(getUserProfile);

    constructor(private store: Store<AppState>, private profileService: ProfileService, private router: Router) { }

    goToDetails(user: any) {
        this.profileService.currentUser = user;
        this.router.navigate(['/profile']);
    }

    ngOnInit() {
        this.store.dispatch(profileActions.initProfile({ user: this.user$ }));
        this.subscription = this.user$.subscribe((response) => {

            if (response && this.profileService.allUsers.length < 10) {
                this.profileService.allUsers.push(response);
            } else {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
            }
        })

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
