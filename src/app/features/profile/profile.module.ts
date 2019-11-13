import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileDetailComponent } from './profile-detail';

@NgModule({
    declarations: [
        ProfileDetailComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule
    ]
})
export class ProfileModule { }
