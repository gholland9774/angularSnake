/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamegridComponent } from './gamegrid.component';

describe('GamegridComponent', () => {
  let component: GamegridComponent;
  let fixture: ComponentFixture<GamegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
