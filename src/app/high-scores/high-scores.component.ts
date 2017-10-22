import { Component, OnInit } from '@angular/core';
import { ScoreDataService } from '../score-data-service.service'

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  constructor(
      private scoreDataService: ScoreDataService
  ) { }

  highScores: any[];

  ngOnInit() {
    this.getAllScores();
  }

  getAllScores() {
    this.scoreDataService.getScores()
        .subscribe(data => {
          this.highScores = data['result'];
          for (var i=this.highScores.length; i<10; i++){
            this.highScores.push({
              name: 'Empty',
              age: 0,
              score: 0
            })
          }
        })
  }

}
