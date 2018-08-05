import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class LoginService {
    constructor(private _http: Http) {}

    status = {
        status : null,
        status_message: null
    }

    authenticationKeyValues = [
        {username: "angular", password: "php"},
        {username: "angular2", password: "php2"},
        {username: "angular3", password: "php3"},
        {username: "angular4", password: "php4"},
        {username: "angular5", password: "php5"},
    ]

    public getLoginStatus(username:string, password:string) {
        for(let index = 0; index<this.authenticationKeyValues.length; index++) {
            if(this.authenticationKeyValues[index].username == username && 
               this.authenticationKeyValues[index].password == password) {
                this.status.status = 1;
                this.status.status_message = "Logged in";
                break;
            }else {
                this.status.status = 0;
                this.status.status_message = "Invalid credentials";
            }
        }
        return this.status;
    }
}