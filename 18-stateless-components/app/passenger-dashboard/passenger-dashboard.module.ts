import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// We need export components that only is being used in other modules, we do not need to export it if it is not being used by other modules.
@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule {}
