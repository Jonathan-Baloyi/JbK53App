import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature-modules/landing/components/home/home.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./feature-modules/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'light-vehicle',
    loadChildren: () =>
      import('./feature-modules/light-vehicle/light-vehicle.module').then(
        (m) => m.LightVehicleModule
      ),
  },
  {
    path: 'heavy-vehicle',
    loadChildren: () =>
      import('./feature-modules/heavy-vehicle/heavy-vehicle.module').then(
        (m) => m.HeavyVehicleModule
      ),
  },
  {
    path: 'motor-cycle',
    loadChildren: () =>
      import('./feature-modules/motorbike/motorbike.module').then(
        (m) => m.MotorbikeModule
      ),
  },
  { path: '**', redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
