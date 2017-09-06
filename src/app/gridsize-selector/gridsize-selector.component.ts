import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gridsize-selector',
  template: `
    <div id="gridSelection">
      <div>Select your game grid size:</div>
      <select id="gridSizeSelect" (change)="onGridSizeChange($event)" [(ngModel)]="selectedGridSize" disabled="{{selectorEnabled}}">
        <option *ngFor="let numOption of gridOptions" [value]="numOption">{{numOption}}</option>
      </select>
    </div>
  `,
  styleUrls: ['./gridsize-selector.component.css']
})
export class GridsizeSelectorComponent implements OnInit {

  constructor() { }

  @Input() gridOptions: number[];

  @Input() selectedGridSize: number;
  @Output() selectedGridSizeChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() selectorEnabled:boolean;

  ngOnInit() {
  }

  onGridSizeChange(event:Event):void {
    this.selectedGridSizeChange.emit(this.selectedGridSize);

  }

}
