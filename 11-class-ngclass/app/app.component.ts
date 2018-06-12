import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
      // This is the property binding way of adding classes, if expression is true it will add the class
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
      // Another way of adding classes is using ngClass and pass an object where object keys would be class names and value would be expressions
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
}
