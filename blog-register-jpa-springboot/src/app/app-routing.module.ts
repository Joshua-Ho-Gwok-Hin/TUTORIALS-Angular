import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './mycomponent/add-post/add-post.component';
import { HomeComponent } from './mycomponent/home/home.component';
import { LoginComponent } from './mycomponent/login/login.component';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';
import { PostComponent } from './mycomponent/post/post.component';
import { RegisterComponent } from './mycomponent/register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create', component:AddPostComponent},
  {path:'edit/:id', component:AddPostComponent},
  {path:'post/:id', component:PostComponent},
  {path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
