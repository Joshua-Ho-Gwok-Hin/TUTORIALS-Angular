import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  { path: '', title: 'ABC Learning Center', component: HomeComponent },
  { path: 'home', title: 'ABC Learning Center - Home', component: HomeComponent },
  { path: 'about', title: 'ABC Learning Center - About Us', component: AboutComponent },
  { path: 'courses', title: 'ABC Learning Center - Courses', component: CoursesComponent },  
  { path: 'register', title: 'ABC Learning Center - Register', component: RegisterComponent },
  { path: 'contact', title: 'ABC Learning Center - Contact Us', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
