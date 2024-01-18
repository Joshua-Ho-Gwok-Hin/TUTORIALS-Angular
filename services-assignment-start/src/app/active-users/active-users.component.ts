import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[];
  toInactiveCounter: number; 

  ngOnInit()  {
    this.users = this.userService.activeUsers;
  }

  constructor(private userService: UsersService, private counterService: CounterService){}


  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.toInactiveCount();

  }
}
