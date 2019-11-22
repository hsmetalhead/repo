import { Component } from '@angular/core';
import {GameService} from '../services/game.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = 'http://localhost:5000/api/games';

  constructor(private gs: GameService, private http: HttpClient)  {}
  data: Array<any>;
  games = [];
  datalength;

  getData() {
      this.http.get(this.url)
          .subscribe((result: Array<any>) => {
            this.data = result;
            console.log(this.data);
            this.datalength = this.data.length;
            this.games.push(String(this.data[0].id));
          });
  }

}
