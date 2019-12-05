import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces';

@Injectable()
export class ProfileService {

    public currentUser: UserProfile = null;
    public allUsers: UserProfile[] = [];

    constructor() { }

}