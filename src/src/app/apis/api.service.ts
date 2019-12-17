import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserProfile } from "../features/profile/interfaces/user-profile";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    defaultErrorMsg = 'There was an error loading data from the API'
    listUrl = 'https://randomuser.me/api/?results=10&nat=us';
    singleUrl = 'https://randomuser.me/api/?nat=us';

    constructor(private http: HttpClient) { }

    adaptAPIUser(userItem: any): UserProfile {
        const tuser: UserProfile = {
            cellNumber: userItem.cell.replace(/[\(\)]/g,''),
            city: userItem.location.city,
            dateOfBirth: new Date(userItem.dob.date).toDateString().slice(4).replace(/(\w{3} \d{2})/,'$1,'),
            email: userItem.email,
            firstName: userItem.name.first,
            lastName: userItem.name.last,
            phoneNumber: userItem.phone.replace(/[\(\)]/g,''),
            picture: userItem.picture.medium,
            state: userItem.location.state,
        }
        return tuser;
    }

    getUsers(): Observable<UserProfile[]> {
        return this.http.get(this.listUrl).pipe(
            map((data: any) => {
                let userItems = data.results;
                userItems = userItems.map((v: any) => this.adaptAPIUser(v));
                return userItems;
            }),
            catchError(function(err) {
                const errorMessage = err.error.error || this.defaultErrorMsg;
                return throwError(errorMessage);
            })
        );
    }

    getUser(): Observable<UserProfile> {
        return this.http.get(this.singleUrl).pipe(
            map((data: any) => {
                const userItem = data.results[0];
                return this.adaptAPIUser(userItem);
            }),
            catchError(function(err) {
                const errorMessage = err.error.error || this.defaultErrorMsg;
                return throwError(errorMessage);
            })
        );
    }
}
