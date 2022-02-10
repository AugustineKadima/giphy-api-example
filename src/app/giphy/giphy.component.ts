import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  subscription:Subscription = new Subscription
  gifs:any = [];

  constructor(private giphyService:GiphyServiceService) { }

  ngOnInit(): void {
    this.giphyService.getTrendingGifs()
    
    this.subscription = this.giphyService.getGifs()
                          .subscribe((response:any) => {
                            this.gifs = response
                            console.log(response)
                          })
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }

}
