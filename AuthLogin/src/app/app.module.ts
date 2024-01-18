import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ShoppingWindowComponent } from './mycomponents/shopping-window/shopping-window.component';
import { BooksComponent } from './mycomponents/books/books.component';
import { SaveBookComponent } from './mycomponents/save-book/save-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent,
    ShoppingWindowComponent,
    BooksComponent,
    SaveBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
