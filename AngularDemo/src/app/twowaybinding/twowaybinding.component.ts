import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: '[app-twowaybinding]',
  // template:'<input [(ngModel)]="newName" type="text"/><br><p>{{newName}}</p><p>two-way-binding</p><hr>',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})

export class TwowaybindingComponent implements OnInit {
  public newEmployees:any[]=[];

  public newName="";
  public ngIfElseBoolean = true;
  public nextNgIfElseBoolean = false;
  public colors = ["red","orange","yellow","green","blue","indigo","violet"];

  public employees = [
    {"id":1, "name":"James Bond", "age":35},
    {"id":2, "name":"Peter Parker", "age":35},
    {"id":3, "name":"Harry Potter", "age":35},
    {"id":4, "name":"Stephen Strange", "age":35},
    {"id":5, "name":"Clark", "age":35}
  ]

  constructor(private empservice:EmpserviceService) {     
  }

  ngOnInit(): void {
    this.empservice.getNewEmployees().subscribe(data => this.newEmployees = data);
  }

}
