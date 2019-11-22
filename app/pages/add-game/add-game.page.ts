import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {

  constructor() { }
  gameName = '';
  gamedev = '';
  ngOnInit() {
  }

}
