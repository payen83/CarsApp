/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public newsList: Array<any> = [];
  public searchText: string = null;
  public newsTemp: Array<any> = [];
  constructor(public newsService: NewsService) {}

  async ngOnInit(){
    const response: any = await this.newsService.getNews();
    console.log(response);
    this.newsList = response.articles;
    this.newsTemp = this.newsList;
  }

  initiateData(){
    this.newsList = this.newsTemp;
  }

  onSearch(){
    this.initiateData();
    const newsData = this.newsList;
    if(this.searchText && this.searchText !== ''){
      this.newsList = newsData.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
      });
    } else {
      this.initiateData();
    }
  }


}
