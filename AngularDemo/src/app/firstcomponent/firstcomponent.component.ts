import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-firstcomponent]',
  template: '<div>Using template url {{firstName}}</div><input [id]="myId" type="text" value="finish"><hr><div><p>I am tring new way {{firstName}}</p><h2>{{firstName.toUpperCase()}}</h2><input type="text" value="firstName"><h1>{{display()}}</h1></div>',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  public firstName="James";
  public myId = "test myId";


  constructor() { }


  ngOnInit(): void {
  }
  
  display(){

      return "read my message " + this.firstName

    }

}
