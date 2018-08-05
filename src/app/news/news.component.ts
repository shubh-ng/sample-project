import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  isLoaded = false;
  newsDetails:any;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.newsService.getNews().subscribe(
      resp=>{
        this.newsDetails = resp.json().articles;
        this.isLoaded = false;
      }
    )
  }

}
