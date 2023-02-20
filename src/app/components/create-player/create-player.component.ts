import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
  id!:number;
  addPlayerReq: Player={

    id: 0,
    playerName:'',
    teamName: '',
    playerGoals:'',
    playerRole:''
 }

 constructor(private playerService: PlayerService,
  private router: Router){}

 addPlayer(){
  this.playerService.createPlayer(this.addPlayerReq)
  .subscribe({
    next:(res)=>{
      console.log(this.addPlayerReq)
    this.router.navigate([''])
    }
  })
 
  
 }

}
