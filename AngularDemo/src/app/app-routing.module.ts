import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path: 'first', component:FirstcomponentComponent},
  {path: 'second', component:SecondComponent},
  {path: 'twoway', component:TwowaybindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[SecondComponent,TwowaybindingComponent]
