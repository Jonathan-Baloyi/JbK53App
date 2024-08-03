import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeTenLearnersTestComponent } from './components/code-ten-learners-test/code-ten-learners-test.component';
import { CodeForteenLearnersTestComponent } from './components/code-forteen-learners-test/code-forteen-learners-test.component';

const routes: Routes = [
  {
    path: 'code-ten',
    component: CodeTenLearnersTestComponent,
  },
  {
    path: 'code-forteen',
    component: CodeForteenLearnersTestComponent,
  },
  {
    path: '**',
    redirectTo: 'code-ten',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavyVehicleRoutingModule {}
