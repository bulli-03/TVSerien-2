import { Injectable } from '@angular/core';
import {Show} from "../model/show";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Show[ ] = [ ];
  detailShow: Show;

  constructor(private httpClient: HttpClient) {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Haus des Geldes'));
    this.shows.push(new Show(3, '4 Blocks'));
    this.shows.push(new Show(4, 'Vikings'));
  }

  addShow(show: Show) {
    this.shows.push(show);
  }

  deleteShow(show: Show){
    this.shows = this.shows.filter(s => s!== show);
  }

  updateShow(show: Show){
    this.shows = this.shows.filter(s => s!== show);
    this.shows.push(show);
  }

  async showShowDetails(show: Show){
    try {
      const data: any = await this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.title).toPromise();
      show.summary = data.summary;
      show.image = data.image.medium;
      this.detailShow = show;
    } catch (e) {
      alert('Es konnte keine passende Serie gefunden werden!')
    }
  }
}
