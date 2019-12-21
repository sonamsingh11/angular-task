import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserHttp } from '../models/http-models/user-http.interface';
import { User } from '../models/user.interface';

// Request random 10 user profiles from randomuser.me and map them to internal
// list of IUsers 
@Injectable()
export class UserService {
	  
	usersUrl = `${environment.apiUrl}?results=10`;
	//usersUrl = 'https://randomuser.me/api/?results=10';

  	constructor(private _http: HttpClient) { }

  	getUsers(): Observable<IUserHttp> {
	
		var users_http: IUserHttp = { users: null };

		var obj = this._http.get<any>(this.usersUrl);
		
		users_http.users = [];
		  
		obj.subscribe(response => {

			console.log(response);

			var i: number = 0;

			if(response.results === undefined || response.results === null)
				return;

			response.results.map((item: any) => {
				var user = new User();
				user.id = i++;

				user.cellNumber = item.cell;
				user.city = item.location.city;
				user.dateOfBirth = item.dob.date;
				user.email = item.email;
				user.firstName	= item.name.first;
				user.lastName = item.name.last;
				user.phoneNumber = item.phone;
				user.picture = item.picture.medium;
				user.state = item.location.state;
				
				users_http.users.push(user);
			});	

		});
		return of(users_http);
  	}

}
