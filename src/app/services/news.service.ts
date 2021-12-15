import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public baseURL = 'https://newsapi.org/v2';
  public apiKey = '2871131a0c474263abd6029bd6380e9d';
  public newsData: any;
  public coords: any;
  public date = '2021-11-15';
  constructor(private httpClient: HttpClient) { }

  setCoords(coords: any){
    this.coords = coords;
  }

  getCoords(){
    return this.coords || { longitude: -0.09, latitude: 51.505 };
  }

  getNews(){
    const fullURL = this.baseURL + '/everything?q=tesla&from='+this.date+'&sortBy=publishedAt&apiKey=' + this.apiKey;
    return new Promise((resolve, reject) => {
        this.httpClient.get(fullURL)
        .subscribe((response: any) => {
            this.newsData = response.articles;
            resolve(response);
        }, (error) => { reject(error); });
    });
  }

  searchNewsById(id: any){
    const data = this.newsData.find((news: any) => news.publishedAt === id);
    if(data !== -1){
      return data;
    }
  }

  getBaseURL(){
    return this.baseURL;
  }


}
