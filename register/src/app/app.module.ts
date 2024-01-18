import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { FooterComponent } from './mycomponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
