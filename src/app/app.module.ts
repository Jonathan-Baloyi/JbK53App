import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HomeComponent } from './components/core/home/home.component';
import { ContainerComponent } from './components/core/container/container.component';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnersTestComponent } from './components/core/learners-test/learners-test.component';
import { AboutComponent } from './components/core/about/about.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { HeavyVehicleService } from './services/heavy-vehicle.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContainerComponent,
    LearnersTestComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MenuService, HeavyVehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
