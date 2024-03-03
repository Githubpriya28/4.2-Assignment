// player.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = 'http://localhost:5000/players';

  constructor(private http: HttpClient) {}

  addPlayer(player: Player): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, player);
  }

  updatePlayer(playerName: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${playerName}`, data);
  }

  deletePlayer(playerName: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${playerName}`);
  }

  performQuery(query: any): Observable<Player[]> {
    return this.http.post<Player[]>(`${this.baseUrl}/query`, query);
  }
}