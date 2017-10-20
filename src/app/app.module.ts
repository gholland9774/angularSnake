import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridsizeSelectorComponent } from './gridsize-selector/gridsize-selector.component';
import { GamegridComponent } from './gamegrid/gamegrid.component';
import { GameCell } from "./game-cell/game-cell.component";
import { GridPositionService } from "./grid-position.service";

@NgModule({
  declarations: [
    AppComponent,
    GridsizeSelectorComponent,
    GamegridComponent,
    GameCell
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      GridPositionService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
