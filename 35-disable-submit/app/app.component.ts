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
// To disable the form submit button when form is invalid, just ues [disabled]="form.invalid" attribute;
export class AppComponent {}
