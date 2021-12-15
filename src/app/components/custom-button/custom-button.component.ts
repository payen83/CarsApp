import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() coords: any;
  constructor(
    public platform: Platform,
    public router: Router,
    public newsService: NewsService
    ) { 
    this.coords = { latitude: null, longitude: null };
  }

  isAndroid(){
    //check if the platform is Android
    return this.platform.is('android');
  }

  pageMap(){
    this.newsService.setCoords(this.coords);
    this.router.navigateByUrl('/map');
  }

  ngOnInit() {}

}
