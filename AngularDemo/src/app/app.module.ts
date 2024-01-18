import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { SecondComponent } from './second/second.component';
import { EmpserviceService } from './empservice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // FirstcomponentComponent,
    // TwowaybindingComponent,
    // SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent, FirstcomponentComponent]
})
export class AppModule { }
