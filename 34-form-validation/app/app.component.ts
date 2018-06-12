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
// when we do validation with templ driven form, we can take advantage of template variable, which holds for state of the form;
// We need to assign each input ngModel to template reference #id=[ngModel];
// That id will have different properties;
// we just need to use required attribute on the input that we want to be required;
// That template variable that holds reference to the form, have different properties like, valid, invalid...
export class AppComponent {}
