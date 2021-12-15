import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

declare let L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.initMap();
  }

  initMap(){
    const coords = this.newsService.getCoords();
    const map = L.map('map').setView([coords.latitude, coords.longitude], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([coords.latitude, coords.longitude]).addTo(map)
    .bindPopup('This is my location.')
    .openPopup();
  }


}
