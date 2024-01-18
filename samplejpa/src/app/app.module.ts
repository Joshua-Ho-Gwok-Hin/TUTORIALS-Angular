import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './mycomponent/post/post.component';
import { LoginComponent } from './mycomponent/login/login.component';
import { RegisterComponent } from './mycomponent/register/register.component';
import { AddPostComponent } from './mycomponent/add-post/add-post.component';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './mycomponent/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    AddPostComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }