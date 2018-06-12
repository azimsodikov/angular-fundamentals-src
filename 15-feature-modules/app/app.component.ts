import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
// There are Smart/Container and Presentational components
// Smart/Container components usually has a service injected to it and it has the data that will be communicated to the child components and renders them
// Dumb/Presentaional components usually accept the data via inputs and emits data changes via output
// In the child component once there is a event/user interaction occurs, you need to send that data to parent component through event emitters
// Data flows down, Events emit up!
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];
}
