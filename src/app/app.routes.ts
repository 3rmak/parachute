import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BookingContactComponent } from './pages/booking-contact/booking-contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'booking-contact', component: BookingContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
