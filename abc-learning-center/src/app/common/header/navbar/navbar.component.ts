import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private router: Router){}

  navbarOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  isActive(url: string): boolean {
    return this.router.url === url || this.router.url === '/home' && url === '/';
  }

}
