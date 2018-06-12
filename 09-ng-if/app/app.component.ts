import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">

      <template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>
      This is what is happening behind the scenes, instead of *, we use template
      This concept are taken from web components and shadow dom feature

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>

    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  }
}
