import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScoreDataService {

  constructor(private http: Http) { }

  private getScoresUrl = 'http://localhost:3000/topScores';
  private submitHighScore = 'http://localhost:3000/postScore';

  getScores(): Observable<Object>{
    let scores = this.http
        .get(this.getScoresUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return scores;
  }

  postScore(name:string, age: number, score: number):  Observable<Object>{
    let body = {
      name: name,
      age: age,
      score: score
    };
    return this.http
        .post(this.submitHighScore, body)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
