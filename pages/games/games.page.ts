import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Observable} from 'rxjs';
import { AlertController } from '@ionic/angular';
import {Games} from '../../models/Games';
@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {


  x: number;
  games: Games[];

  constructor(private gameserv: GameService,
              private alertCtrl: AlertController ) { }

  ngOnInit() {
    this.searchChanged();
  }

  searchChanged(): Observable<Games[]> {
  return this.gameserv.getData()
                                .subscribe((result) => {this.games = result;
                            });
  }

 /*  searchingOne(id) Observable<Game> {
    return this.gameserv.getOne(id).subscribe(result => {
      this.games = result;
      this.name = this.games.gameName;
      this.dev = this.games.dev;
      console.log(this.games);
    });
  } */


  async presentAlert(name, dev) {
    const alert = await this.alertCtrl.create({
      header: 'Game Info',
      subHeader: 'Name:  ' + name,
      message: 'Developer: ' + dev,
      buttons: ['Got it!']
    });

    await alert.present();
  }


}
