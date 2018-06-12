import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      <div>
        Total checked in: {{ checkedInCount() }}/{{ items?.length }}
      </div>
    </div>
  `
})
// When items not avaiable angular throws error, for that reason you need to use safe navigation operator, which will wait for property to available and then bounds that input
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
