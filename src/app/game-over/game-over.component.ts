import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScoreDataService} from '../score-data-service.service'

@Component({
    selector: 'app-game-over',
    templateUrl: './game-over.component.html',
    styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private scoreDataService: ScoreDataService) {
    }

    score: number = 0;
    lowestHighScore: number = 0;
    isInTopTen: boolean = false;

    name:string = "";
    age: number;

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
        this.isInTopTen = this.score > this.lowestHighScore;
    }

    submitScore() {
        this.scoreDataService.postScore(this.name, this.age, this.score)
            .subscribe(data=> {
                this.router.navigateByUrl('/highScores');
            })
    }

    playAgain() {
        this.router.navigateByUrl('/play');
    }

    backToLeaderboard() {
        this.router.navigateByUrl('/highScores');
    }

}
