import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}

      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname">
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id">
      </div>

      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  // ngForm: Angular directive that will keep track of all of the state changes and all of the form validation of the form
  // we create name property on each input, and that also will be created as a property in the form object
  // Also each input shoud have ngModel property which is angular directive that will bind input values asycn and form properties will be updated in real time
  // We assing ngForm to local variable
  // Since template is a source of truth, we initialize our ngModel with a detail property that is passed in
  // .. we do this through property binding, and it will be one way data binding like this [ngModel]="initialValue"
  detail: Passenger;
}
