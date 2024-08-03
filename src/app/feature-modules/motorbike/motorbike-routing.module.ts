import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorCycleLearnersTestComponent } from './components/motor-cycle-learners-test/motor-cycle-learners-test.component';

const routes: Routes = [
  {
    path: '',
    component: MotorCycleLearnersTestComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorbikeRoutingModule {}
