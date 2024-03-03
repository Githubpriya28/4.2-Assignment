// delete-player.component.ts
import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html'
})
export class DeletePlayerComponent {
  playerName: string = '';

  constructor(private playerService: PlayerService) {}

  deletePlayer(): void {
    this.playerService.deletePlayer(this.playerName).subscribe(() => {
      console.log('Player deleted successfully');
    });
  }
}