import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScoreDataService {

  constructor(private http: Http) { }

  private getScoresUrl = 'http://ec2-13-58-181-240.us-east-2.compute.amazonaws.com:3000/topScores';
  private submitHighScore = 'http://ec2-13-58-181-240.us-east-2.compute.amazonaws.com:3000/postScore';

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
      age: Number(age),
      score: Number(score)
    };
    return this.http
        .post(this.submitHighScore, body)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
