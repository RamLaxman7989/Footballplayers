import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';

const routes: Routes = [
  {path: 'create-player', component: CreatePlayerComponent},
  {path: '', component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
