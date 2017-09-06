import { Component, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { GridsizeSelectorComponent } from './gridsize-selector/gridsize-selector.component'
import { GamegridComponent } from './gamegrid/gamegrid.component'
import { GridPositionService } from './grid-position.service'

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    
    <app-gridsize-selector
        class="gridsizeSelector"
        [gridOptions]="gridOptions"
        [(selectedGridSize)]="selectedGridSize"
        [selectorEnabled]="gameInProgress"
    ></app-gridsize-selector>
    
    <app-gamegrid
        class="gameGrid"
        [gridSize]="selectedGridSize"
        [newSnakePosition]="snakePosition"
        [foodPosition]="foodPosition">
    </app-gamegrid>
    
    <div id="startButton">Press any arrow key to start the game</div>
  `,
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class AppComponent {
  title = 'Classic Snake Game!';
  gridOptions = [10, 15, 20, 25, 30];
  selectedGridSize = 10;
  direction:string = null;
  gameInProgress:boolean = false;
  snakePosition: any[] = [];
  foodPosition: number[] = [];
  gridPositionService: GridPositionService = new GridPositionService();
  gameTimer: Subscription


  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        if (!this.gameInProgress){
          this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
          this.gameInProgress = true;
          this.startGame();
        }
        this.direction = "U";
        break;
      case 'ArrowDown':
        if (!this.gameInProgress){
          this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
          this.gameInProgress = true;
          this.startGame();
        }
        this.direction = "D";
        break;
      case 'ArrowLeft':
        if (!this.gameInProgress){
          this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
          this.gameInProgress = true;
          this.startGame();
        }
        this.direction = "L";
        break;
      case 'ArrowRight':
        if (!this.gameInProgress){
          this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.selectedGridSize);
          this.gameInProgress = true;
          this.startGame();
        }
        this.direction = "R";
        break;
    }
  }

  startGame():void {
    let timer = Observable.timer(0,250  );
    this.gameTimer = timer.subscribe(t=>{
      this.handleTick(t);
    });
  }

  handleTick(t):void {
    this.snakePosition = this.gridPositionService.getNextSnakePosition(this.snakePosition, this.direction, this.selectedGridSize);
  }
}
