import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public news: any;
  public id: any;
  constructor(public activatedRoute: ActivatedRoute, public newsService: NewsService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);
  }

  ngOnInit() {
    const response = this.newsService.searchNewsById(this.id);
    console.log(response);
    this.news = response;
  }

}
