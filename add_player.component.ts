// add-player.component.ts
import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html'
})
export class AddPlayerComponent {
  player: Player = {
    name: '',
    position: ''
  };

  constructor(private playerService: PlayerService) {}

  addPlayer(): void {
    this.playerService.addPlayer(this.player).subscribe(() => {
      console.log('Player added successfully');
    });
  }
}
