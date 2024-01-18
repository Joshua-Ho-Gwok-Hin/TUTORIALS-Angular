import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name="";

  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void {

    this.auth.canAccess();
    this.name = this.auth.getUserName();
  }

}
