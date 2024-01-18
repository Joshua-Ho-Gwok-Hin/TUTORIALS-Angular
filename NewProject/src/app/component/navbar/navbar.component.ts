import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.removeToken();
    this.auth.canAccess();
  }

}
