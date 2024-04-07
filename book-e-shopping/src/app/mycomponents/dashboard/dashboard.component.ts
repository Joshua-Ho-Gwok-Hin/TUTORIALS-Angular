import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/model/auth';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = "Hello";
  userId = 0;
  isAdmin: boolean = false;


  constructor(public authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.authService.canAccess();
    this.userId = Number(this.authService.getId());
    this.name = this.authService.getGreetingName();

  }



}
