import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = 'http://localhost:5000/api/games';
  constructor(private http: HttpClient) { }

  data = {};

  getData(): any {
      return this.http.get(this.url);
      // .subscribe(result => this.data = result);
      // console.log(this.data);
      // return this.data;
  }

  getOne(id) {
    return this.http.get(`${this.url}/${encodeURI(id)}`);
    // .subscribe(result => this.data = result);
    // console.log(this.data);
    // return this.data;

  }



}
