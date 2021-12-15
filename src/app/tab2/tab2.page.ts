import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public coords: any;
  constructor(
    private platform: Platform, 
    private loadingController: LoadingController,
    private router: Router,
    private newsService: NewsService
    ) {
    this.coords = { latitude: null, longitude: null };
  }

  async ngOnInit(){
    await this.presentLoading();
    try {
      const response = await Geolocation.getCurrentPosition();
      console.log(response);
      this.coords = response.coords;
    } catch(err) {
      console.log(err);
    }
    await this.loadingController.dismiss();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Getting geolocation...',
    });
    await loading.present();
  }

  isAndroid(){
    //check if the platform is Android
    return this.platform.is('android');
  }

  pageMap(){
    this.newsService.setCoords(this.coords);
    this.router.navigateByUrl('/map');
  }

}
