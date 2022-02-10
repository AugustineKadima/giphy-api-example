import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyServiceService {

  gifs = new BehaviorSubject<any>([])

  getTrendingGifs(){
    return this.http.get(`
    https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=20`)
    .subscribe((response: any)=>{
      this.gifs.next(response.data)
    });
  }

  searchGifs(gifName: string){
      return this.http.get(`
      https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&limit=20`)
      .subscribe((response: any)=>{
        this.gifs.next(response.data)
      });
    
    }

  getGifs(){
    return this.gifs.asObservable();
  }

  constructor(private http:HttpClient) { }
}
