/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScoreDataServiceService } from './score-data-service.service';

describe('ScoreDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreDataServiceService]
    });
  });

  it('should ...', inject([ScoreDataServiceService], (service: ScoreDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
