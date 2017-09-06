import { Injectable } from '@angular/core';

@Injectable()
export class GridPositionService {

  constructor() { }

  getInitialSnakePosition(gridSize:number): any[] {
    //Head will be in the middle:
    let head:number[] = [Math.floor(gridSize/2), Math.floor(gridSize/2)];
    // Body will be to the left
    let body1:number[] = [head[0], head[1]-1];
    let body2:number[] = [head[0], head[1]-2];
    return [head, body1, body2];
  }

  getNextSnakePosition(oldSnakePosition:any[], direction:string, gridSize:number): any[] {
    let newSnakePosition = [];
    switch (direction) {
      case "U":
        newSnakePosition[0] = [oldSnakePosition[0][0] - 1, oldSnakePosition[0][1]];
        break;
      case "D":
        newSnakePosition[0] = [oldSnakePosition[0][0] + 1, oldSnakePosition[0][1]];
        break;
      case "L":
        newSnakePosition[0] = [oldSnakePosition[0][0], oldSnakePosition[0][1] - 1];
        break;
      case "R":
        newSnakePosition[0] = [oldSnakePosition[0][0], oldSnakePosition[0][1] + 1];
        break;
    }

    if (newSnakePosition[0][0] < 0 || newSnakePosition[0][1] < 0 || newSnakePosition[0][0] >= gridSize || newSnakePosition[0][1] >= gridSize){
      alert ('You a dead ass snake');
    }

    for (let i=1; i<oldSnakePosition.length; i++){
      newSnakePosition[i] = oldSnakePosition[i-1];
    }
    return newSnakePosition;
  }
}
