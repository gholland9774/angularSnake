import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    
    <router-outlet></router-outlet>
  `,
  styles: [],
  host: {
  }
})
export class AppComponent {
  title = 'Classic Snake Game';
}
