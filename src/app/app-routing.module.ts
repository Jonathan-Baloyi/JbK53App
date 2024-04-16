import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { HomeComponent } from './components/core/home/home.component';
import { LearnersTestComponent } from './components/core/learners-test/learners-test.component';

const routes: Routes = [
  { path: '', component: LearnersTestComponent },
  { path: 'home', component: LearnersTestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
