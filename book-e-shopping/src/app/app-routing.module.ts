import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './mycomponents/books/books.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { SaveBookComponent } from './mycomponents/save-book/save-book.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "books/:id", component: BooksComponent },
  { path: "create", component: SaveBookComponent },
  { path: "edit/:id", component: SaveBookComponent },
  { path: "delete/:id", component:DashboardComponent}
  // {path:"create/:id"},
  // {path:"edit/:id"}

  // {path:"navbar", component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents=[FilterComponent,ShoppingWindowComponent]

