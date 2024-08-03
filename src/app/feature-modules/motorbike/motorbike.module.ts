import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorbikeRoutingModule } from './motorbike-routing.module';
import { MotorCycleLearnersTestComponent } from './components/motor-cycle-learners-test/motor-cycle-learners-test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MotorCycleLearnersTestComponent],
  imports: [CommonModule, MotorbikeRoutingModule, SharedModule],
})
export class MotorbikeModule {}
