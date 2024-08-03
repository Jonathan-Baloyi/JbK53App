import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightVehicleLearnersTestComponent } from './components/light-vehicle-learners-test/light-vehicle-learners-test.component';

const routes: Routes = [
  {
    path: '',
    component: LightVehicleLearnersTestComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightVehicleRoutingModule {}
