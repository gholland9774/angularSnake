import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'game-cell',
    styles: [`
        .gameCellUnit{
            width: 100%;
            height: 100%;
            background-color: lightblue;
            display: flex;
            align-items: center;
            justify-content: center;    
        }
        .blank {
            background-color: #ddd;
        }
        .head {
            background-color: darkgreen;
        }
        .body {
            background-color: greenyellow;
        }
        .food {
            background-color: saddlebrown;
        }
    `],
    template: `
      <div class="gameCellUnit {{gridStyle}}">
      </div>
    `,
})
export class GameCell implements OnChanges {
    gridStyle:string = "blank"
    @Input() cellContent:number;

    ngOnChanges(changes: SimpleChanges) {
        if ('cellContent' in changes) {
            this.setGridStyle()
        }
    }

    setGridStyle():void {
        if (this.cellContent == 2){
            this.gridStyle = "head";
        }
        else if (this.cellContent == 1) {
            this.gridStyle = "body";
        }
        else if (this.cellContent == 3) {
            this.gridStyle = "food";
        }
        else {
            this.gridStyle = "blank";
        }
    }
}