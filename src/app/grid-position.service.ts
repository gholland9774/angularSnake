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

  getNextSnakePosition(oldSnakePosition:any[], direction:string): any[] {
    let newSnakePosition = [];
    let hitFood = false;
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

    for (let i=1; i<oldSnakePosition.length; i++){
      newSnakePosition[i] = oldSnakePosition[i-1];
    }

    return newSnakePosition;
  }

  foodCollisionCheck(snakePosition: any[], foodPosition: number[]) {
    return snakePosition[0][0] == foodPosition[0] && snakePosition[0][1] == foodPosition[1];
  }

  getNewFoodPosition(snakePosition: any[], gridSize: number) {
    let newFoodPosition = [];
    newFoodPosition[0] = Math.floor(Math.random() * gridSize);
    newFoodPosition[1] = Math.floor(Math.random() * gridSize);
    console.log(newFoodPosition);
    return newFoodPosition;
  }

  collisionCheck(snakePosition: any[], gridSize: number) {
    if ( snakePosition[0][0] < 0 || snakePosition[0][1] < 0 || snakePosition[0][0] >= gridSize || snakePosition[0][1] >= gridSize){
      return true;
    }
    for (let i=1; i<snakePosition.length; i++){
      if (snakePosition[0][0] == snakePosition[i][0] && snakePosition[0][1] == snakePosition[i][1]){
        return true;
      }
    }
    return false;
  }
}
