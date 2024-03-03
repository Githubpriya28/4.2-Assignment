// update-player.component.ts
import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html'
})
export class UpdatePlayerComponent {
  playerName: string = '';
  data: any = {};

  constructor(private playerService: PlayerService) {}

  updatePlayer(): void {
    this.playerService.updatePlayer(this.playerName, this.data).subscribe(() => {
      console.log('Player updated successfully');
    });
  }
}