import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { RegisterComponent } from './mycomponents/register/register.component';

const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch: 'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"navbar", component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
