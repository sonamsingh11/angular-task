import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { profileActions } from "@store/actions";
import { AppState } from "@store/reducers";
import { getUserProfile } from "@store/selectors";
import { UserProfile } from "@interfaces";

import { first } from "rxjs/operators";


@Component({
    selector: "app-profile-detail",
    styleUrls: ["./profile-detail.component.less"],
    templateUrl: "./profile-detail.component.html"
})
export class ProfileDetailComponent implements OnInit {
    user$ = this.store.select(getUserProfile);

    constructor(private store: Store<AppState>, private router: Router) {}

    ngOnInit() {
        this.user$.pipe(first()).subscribe((data: UserProfile) => {
            if (!data) {
                this.store.dispatch(
                    profileActions.initProfile()
                );
            }
        });
    }

    backToList() {
        this.router.navigate(['profile-list']);
    }
}
