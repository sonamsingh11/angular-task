import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) {}

    get newProfileList(): Observable<any> {
        return this.http.get<any>(
            "https://randomuser.me/api/?results=10&noinfo"
        );
    }
}
