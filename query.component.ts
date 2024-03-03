// query.component.ts
import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent {
  query: any = {};
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  performQuery(): void {
    this.playerService.performQuery(this.query).subscribe((players) => {
      this.players = players;
    });
  }
}