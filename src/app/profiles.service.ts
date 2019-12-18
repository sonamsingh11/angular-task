import { getProfileState } from './features/profile/store/profile.selectors';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
    private API_PATH = 'https://randomuser.me/api/';

    constructor(private http: Http) {}

    getProfile(): Observable<any> {
      return this.http.get(`${this.API_PATH}`)
        .map(res => res.json().results || []);
    }
    getInitialProfiles(): Observable<any> {
        return this.http.get(`${this.API_PATH}?10`)
          .map(res => res.json().results || []);
      }
}
