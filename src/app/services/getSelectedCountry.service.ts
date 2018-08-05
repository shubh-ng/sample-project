import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class SelectedCountryService {
    constructor(private _http: Http) {}

    public getCountriesDetails(countryName:string) {
        let url = "https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true";
        return this._http.get(url);
    }
}