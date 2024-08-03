import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeavyVehicleRoutingModule } from './heavy-vehicle-routing.module';
import { CodeTenLearnersTestComponent } from './components/code-ten-learners-test/code-ten-learners-test.component';
import { CodeForteenLearnersTestComponent } from './components/code-forteen-learners-test/code-forteen-learners-test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CodeTenLearnersTestComponent,
    CodeForteenLearnersTestComponent,
  ],
  imports: [CommonModule, HeavyVehicleRoutingModule, SharedModule],
  providers: [],
})
export class HeavyVehicleModule {}
