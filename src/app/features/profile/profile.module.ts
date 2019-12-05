import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';
import { ProfilesComponent } from './profiles-page/profiles-page.component';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfilesComponent
    ],
    entryComponents: [
        ProfileDetailComponent,
        ProfilesComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfilesComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        EffectsModule.forRoot([ProfileEffects]),
        StoreModule.forFeature('profile', getProfileReducer)
    ],
    providers: [ProfileService]
})
export class ProfileModule { }
