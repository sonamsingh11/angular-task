export interface IUser {
  	id: number;
  	cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
}

export class User implements IUser {
	id: number;	
	cellNumber: string;
	city: string;
	dateOfBirth: string;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	picture: string;
	state: string;
}