import { Component, OnInit, HostListener } from '@angular/core';
import { NewsService } from './services/news.service';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoaded = false;
  noOfNews = 0;
  noOfCountries = 249;
  toggleIcon = "fa fa-arrow-right";

  countryDetails:any;
  constructor(private newsService:NewsService, private countryService:CountryService) {}

  toggle() {
    if(this.toggleIcon==="fa fa-arrow-right") {
      this.toggleIcon = "fa fa-arrow-left";
    }else{
      this.toggleIcon = "fa fa-arrow-right";
    }
  }

  ngOnInit() {
    this.isLoaded = true;
    this.newsService.getNews().subscribe(
      resp=>{
        this.noOfNews = resp.json().totalResults;
        this.isLoaded = false;
      }
    )
  }
}
