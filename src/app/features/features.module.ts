import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    entryComponents: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        LayoutModule
    ]
})
export class FeaturesModule { }
