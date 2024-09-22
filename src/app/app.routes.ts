import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'about', component : AboutUsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'contact', component : ContactUsComponent}
];
