import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { UsersComponent } from './containers/users/users.component'; 
import { UserComponent } from './containers/user/user.component';

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile'
    },
    {
        component: UsersComponent,
        data: { name: 'profiles' },
        path: 'profiles'
    },
    { path: 'profile/:id', component: UserComponent },
  	{ path: '', redirectTo: '/profiles', pathMatch: 'full' },
    {
        component: PageNotFoundComponent,
        data: { name: 'pageNotFound' },
        path: '404'
    },
    {
        component: HomePageComponent, 
        data: { name: 'homePage' },
        path: ''
    },
    {
        data: { name: 'pageNotFound' },
        path: '**',
        redirectTo: '/404'
    }
];
