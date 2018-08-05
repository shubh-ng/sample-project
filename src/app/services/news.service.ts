import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class NewsService {
    constructor(private _http: Http) {}
    private API_KEY = "47fd35764ef8480eb10c7a7ae6847b5a";

    public getNews() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2018-07-28&to=2018-07-28&sortBy=popularity&apiKey="+this.API_KEY;
        return this._http.get(url);
    }
}
