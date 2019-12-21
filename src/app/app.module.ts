import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserService } from './services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { RoutingModule } from './core/routing/routing.module';
import { UserEffects } from './store/effects/user.effects';

import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { LayoutModule } from '@core/layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        
        UsersContainerComponent,
    	UsersComponent,
    
    	UserComponent,
	    UserDetailsComponent

    ],
    imports: [
		BrowserModule,
		HttpClientModule,
		FeaturesModule,
		LayoutModule, 
		MatCardModule,
        MatDividerModule,
        MatListModule,
		
		StoreModule.forRoot(appReducers),
    	EffectsModule.forRoot([UserEffects/*, ConfigEffects*/]),
    	StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    	!environment.production ? StoreDevtoolsModule.instrument() : [],
		RoutingModule
	
    ],
    providers: [UserService]
})
export class AppModule { }
