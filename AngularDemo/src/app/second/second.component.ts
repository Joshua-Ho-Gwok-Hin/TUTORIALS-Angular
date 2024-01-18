import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: '[app-second]',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  newEmployees:any[]=[];

  constructor(private empservice:EmpserviceService) {     
}

  ngOnInit(): void {   
    this.empservice.getNewEmployees().subscribe(data => this.newEmployees = data);
  }

}
