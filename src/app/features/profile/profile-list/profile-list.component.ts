import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Store
import { Store } from "@ngrx/store";
import { profileActions } from "@store/actions";
import { AppState } from "@store/reducers";

// Services
import { ProfileService } from "@features/profile/services/profile.service";

// Interfaces
import { UserProfile } from "@interfaces";

@Component({
    selector: "app-profile-list",
    templateUrl: "./profile-list.component.html",
    styleUrls: ["./profile-list.component.less"]
})
export class ProfileListComponent implements OnInit {
    profileList: UserProfile[] = [];
    listLoaded = false;

    constructor(
        private profileService: ProfileService,
        private store: Store<AppState>,
        private router: Router
    ) {}

    ngOnInit() {
        this.retrieveList();
    }

    retrieveList() {
        this.profileService.newProfileList.subscribe(data => {
            this.profileList = this.parseData(data.results);
            this.listLoaded = true;
        });
    }

    refreshList() {
        this.listLoaded = false;
        this.retrieveList();
    }

    viewProfile(data: UserProfile) {
        this.store.dispatch(profileActions.initProfile({ profile: data }));
        this.router.navigate([`/profile`]);
    }

    // Format response data to match website data
    parseData(rawResponse: any[]): UserProfile[] {
        const dataList: UserProfile[] = [];

        rawResponse.map(dataRow => {
            const mappedProfile: UserProfile = {
                cellNumber: dataRow.cell,
                city: dataRow.location.city,
                dateOfBirth: dataRow.dob.date,
                email: dataRow.email,
                firstName: dataRow.name.first,
                lastName: dataRow.name.last,
                phoneNumber: dataRow.phone,
                picture: dataRow.picture.large,
                state: dataRow.location.state
            };

            dataList.push(mappedProfile);
        });

        return dataList;
    }
}
