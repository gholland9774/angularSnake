import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridsizeSelectorComponent } from './gridsize-selector/gridsize-selector.component';
import { GamegridComponent } from './gamegrid/gamegrid.component';
import { GameCell } from "./game-cell/game-cell.component";
import { GridPositionService } from "./grid-position.service";
import { HighScoresComponent } from './high-scores/high-scores.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ScoreDataService } from "./score-data-service.service";
import { GameOverComponent } from './game-over/game-over.component';

const appRoutes = [
  { path: 'highScores', component: HighScoresComponent },
  { path: 'play', component: GameBoardComponent },
  { path: 'gameOver/:score', component: GameOverComponent },
  { path: '**', redirectTo: '/highScores', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    GridsizeSelectorComponent,
    GamegridComponent,
    GameCell,
    HighScoresComponent,
    GameBoardComponent,
    GameOverComponent
  ],
  imports: [
      RouterModule.forRoot( appRoutes ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      GridPositionService,
      ScoreDataService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
