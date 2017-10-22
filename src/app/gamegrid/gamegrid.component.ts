import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { GameCell } from '../game-cell/game-cell.component'

@Component({
  selector: 'app-gamegrid',
  template: `
    <div *ngFor="let row of gameArray; let i = index"class="gameRow">
      <div *ngFor="let col of row; let j = index;" class="gameCell">
        <game-cell [cellContent]="col" class="gameCell"></game-cell>
      </div>
    </div>
  `,
  styleUrls: ['./gamegrid.component.css']
})
export class GamegridComponent implements OnChanges, OnInit {

  constructor() { }

  @Input() gridSize: number;
  @Input() newSnakePosition: any[];
  @Input() foodPosition: number[];

  currentSnakePosition: any[];

  gameArray: any[] = [];

  ngOnInit() {
    this.constructGrid();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('gridSize' in changes) {
      let gridSize: SimpleChange = changes['gridSize'];
      this.onGridSizeChange(gridSize.currentValue);
    }
    if ('newSnakePosition' in changes) {
      this.updateGrid();
    }
    if ('foodPosition' in changes) {
      this.updateGrid();
    }
  }

  updateGrid():void {
    this.resetGrid();
    for (let i in this.newSnakePosition){
      let coords = this.newSnakePosition[i];
      this.gameArray[coords[0]][coords[1]] = i=="0"? 2 : 1;
    }
    this.gameArray[this.foodPosition[0]][this.foodPosition[1]] = 3;
  }

  resetGrid():void {
    let newGameArray = [];
    for (let i=0; i<this.gameArray.length; i++) {
      let arr = [];
      for (let j=0; j<this.gameArray.length; j++){
        arr.push("0")
      }
      newGameArray.push(arr);
    }
    this.gameArray = newGameArray;
  }

  onGridSizeChange(newGridSize:number) {
    this.constructGrid();
  }

  constructGrid() {
    this.gameArray = [];
    for (let i=0; i<this.gridSize; i++) {
      let arr = [];
      for (let j=0; j<this.gridSize; j++){
        arr.push("0")
      }
      this.gameArray.push(arr);
    }
  }
}
