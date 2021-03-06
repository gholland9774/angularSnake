import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { GridPositionService } from '../grid-position.service';


@Component({
    selector: 'app-game-board',
    styleUrls: ['./game-board.component.css'],
    templateUrl: './game-board.component.html',
    host: {
        '(document:keydown)': 'handleKeyboardEvent($event)'
    }
})
export class GameBoardComponent implements OnInit {

    constructor(
        private gridPositionService: GridPositionService,
        private router: Router
    ) {}

    gridSize: number = 20;
    direction: string = null;
    gameInProgress: boolean = false;
    snakePosition: any[] = [];
    foodPosition: number[] = [1, 4];
    gameTimer: Subscription;
    timerTime: number = 200;
    timerMultiple: number = 0.98;
    fastestTime: number = 90;
    score:number = 0;

    ngOnInit() {
    }

    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key == 'ArrowUp' || event.key == "ArrowDown" || event.key == 'ArrowRight' || event.key == 'ArrowLeft'){
            if (!this.gameInProgress) {
                this.snakePosition = this.gridPositionService.getInitialSnakePosition(this.gridSize);
                this.gameInProgress = true;
                this.startGame();
            }
            switch (event.key) {
                case 'ArrowUp':
                    if (this.direction !== "D") {
                        this.direction = "U";
                    }
                    break;
                case 'ArrowDown':
                    if (this.direction !== "U") {
                        this.direction = "D";
                    }
                    break;
                case 'ArrowLeft':
                    if (this.direction !== "R") {
                        this.direction = "L";
                    }
                    break;
                case 'ArrowRight':
                    if (this.direction !== "L") {
                        this.direction = "R";
                    }
                    break;
            }
        }
    }

    startGame(): void {
        this.startTimer(this.timerTime);
    }

    startTimer(tickTime): void {
        let timer = Observable.timer(tickTime, tickTime);
        this.gameTimer = timer.subscribe(t => {
            this.handleTick(t);
        });
    }

    handleTick(t): void {
        let oldSnakePosition = this.snakePosition;
        let newSnakePosition = this.gridPositionService.getNextSnakePosition(this.snakePosition, this.direction);
        let collisionCheck = this.gridPositionService.collisionCheck(newSnakePosition, this.gridSize);

        if (collisionCheck) {
            this.gameTimer.unsubscribe();
            this.router.navigateByUrl('/gameOver/' + this.score);
        }
        else {
            this.snakePosition = newSnakePosition;
            let hitFood = this.gridPositionService.foodCollisionCheck(this.snakePosition, this.foodPosition);
            if (hitFood) {
                this.score += 10;
                this.foodPosition = this.gridPositionService.getNewFoodPosition(this.snakePosition, this.gridSize)
                this.snakePosition.push(oldSnakePosition[oldSnakePosition.length - 1]);
                if (this.timerTime > this.fastestTime) {
                    this.speedUp();
                }
            }
        }

    }

    speedUp(): void {
        this.gameTimer.unsubscribe();
        this.timerTime = Math.floor(this.timerTime * this.timerMultiple);
        this.startTimer(this.timerTime);
    }

}
