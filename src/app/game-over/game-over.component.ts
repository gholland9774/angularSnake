import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScoreDataService} from '../score-data-service.service'

@Component({
    selector: 'app-game-over',
    templateUrl: './game-over.component.html',
    styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private scoreDataService: ScoreDataService) {
    }

    score: number = 0;
    lowestHighScore: number = 0;
    isInTopTen: boolean = false;

    name:string = "Test score";
    age: number = 100;

    ngOnInit() {
        this.score = this.route.snapshot.params['score'];
        this.getAllScores();
    }

    getAllScores() {
        this.scoreDataService.getScores()
            .subscribe(data => {
                let highScores = data['result'];
                if (highScores.length == 10) {
                    this.lowestHighScore = highScores[9]['score']
                }
                this.compareScore();
            })
    }

    compareScore() {
        console.log(this.score, this.lowestHighScore);
        this.isInTopTen = this.score > this.lowestHighScore;
    }

    submitScore() {
        console.log('submit score');

        this.scoreDataService.postScore(this.name, this.age, this.score)
            .subscribe(data=> {
                console.log(data);
            })
    }

}
