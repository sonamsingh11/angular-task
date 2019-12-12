import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@core/layout/layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { ProfileDetailComponent } from "./profile-detail";
import { ProfileListComponent } from "@features/profile/profile-list/profile-list.component";
import { getProfileReducer } from "./store/profile.reducers";
import { ProfileService } from "@features/profile/services/profile.service";

@NgModule({
    declarations: [ProfileDetailComponent, ProfileListComponent],
    entryComponents: [ProfileDetailComponent, ProfileListComponent],
    exports: [ProfileDetailComponent, ProfileListComponent],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        FlexLayoutModule,
        StoreModule.forFeature("profile", getProfileReducer)
    ],
    providers: [ProfileService]
})
export class ProfileModule {}
