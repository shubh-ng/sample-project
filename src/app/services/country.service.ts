import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class CountryService {
    constructor(private _http: Http) {}

    public getCountriesDetails() {
        let url = "https://restcountries.eu/rest/v2/all";
        return this._http.get(url);
    }
}