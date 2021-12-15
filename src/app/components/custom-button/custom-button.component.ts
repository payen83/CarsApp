import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() coords: any;
  constructor(
    public router: Router,
    public newsService: NewsService
    ) { 
    this.coords = { latitude: null, longitude: null };
  }

  pageMap(){
    this.newsService.setCoords(this.coords);
    this.router.navigateByUrl('/map');
  }

  ngOnInit() {}

}
