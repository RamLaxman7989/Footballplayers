import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit{

  players!: Player[];
  // id!:number;

  constructor(private playerService: PlayerService,
    private router: Router){}

  ngOnInit(): void {
    this.getPlayers();
  }

   getPlayers(){
    this.playerService.getPlayersList()
    .subscribe(
      data =>{
      this.players = data;
    })
  }

}
