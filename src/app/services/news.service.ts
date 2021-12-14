import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public baseURL = 'https://newsapi.org/v2';
  public apiKey = '2871131a0c474263abd6029bd6380e9d';
  public newsData: any;
  constructor(private httpClient: HttpClient) { }

  getNews(){
    const fullURL = this.baseURL + '/everything?q=tesla&from=2021-11-14&sortBy=publishedAt&apiKey=' + this.apiKey;
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
