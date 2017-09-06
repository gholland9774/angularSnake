/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GridPositionService } from './grid-position.service';

describe('GridPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridPositionService]
    });
  });

  it('should ...', inject([GridPositionService], (service: GridPositionService) => {
    expect(service).toBeTruthy();
  }));
});
