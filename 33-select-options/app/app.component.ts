import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-viewer></passenger-viewer>
    </div>
  `
})
// when you want to preselect the one of the options you use [selected] and assign expression which compiles to boolean;

export class AppComponent {}
