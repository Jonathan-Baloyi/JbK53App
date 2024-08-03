import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightVehicleRoutingModule } from './light-vehicle-routing.module';
import { LightVehicleLearnersTestComponent } from './components/light-vehicle-learners-test/light-vehicle-learners-test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LightVehicleLearnersTestComponent],
  imports: [CommonModule, LightVehicleRoutingModule, SharedModule],
})
export class LightVehicleModule {}
