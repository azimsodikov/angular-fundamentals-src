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
// To submit template driven form we need to put (ngSubmit)="handleSubmit(form)" event on the form itself and pass template variable to it, which holds state of the form;
// Since form component is stateless component, we should not communicate with api directly, we should emit that submit event to the container (passenger-viewer) component that deals with the state;
// Every time when we update the object, we should try to use Object.assign() to create new object;
export class AppComponent {}
