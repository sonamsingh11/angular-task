import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ProfilesComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        AppRoutingModule
    ]
})
export class AppModule { }
