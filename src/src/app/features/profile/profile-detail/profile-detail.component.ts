import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfile, getUserError } from '@store/selectors';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);
    error$ = this.store.select(getUserError);

    constructor (private store: Store<AppState>) {}

    ngOnInit () {
    }

}
