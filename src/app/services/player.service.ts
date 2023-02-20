import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseURL ="http://localhost:8080/api/v1/footballplayer";

  constructor(private httpClient: HttpClient) { }

  getPlayersList(): Observable<Player[]>{
    return this.httpClient.get<Player[]>(`${this.baseURL}`);
  }

  createPlayer(addPlayerReq:Player): Observable<Player>{
    
    return this.httpClient.post<Player>(`${this.baseURL}`, addPlayerReq);
  }
}
