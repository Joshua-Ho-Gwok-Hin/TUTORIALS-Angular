import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userName = '';
  logs: string[] = [];
  anotherLogs: number[] = [];
  count: number = 0;
  logString: string = ' Buttons pushed for ';

  isTurnedToTrue = false;
  anotherTogger = false; 



  constructor() { }

  ngOnInit(): void {
  }

  empty() {
    this.userName = '';
  }

  toggle() {
    if (this.isTurnedToTrue === false) {
      this.isTurnedToTrue = true;
    } else {
      this.isTurnedToTrue = false;
    }
    this.count++;
    this.addToLogs(this.logString);

  }


  change(){
    this.anotherTogger = !this.anotherTogger;
    this.anotherLogs.push(this.anotherLogs.length + 1);
  }

  addToLogs(logString: string) { 
    this.logs.push(new Date() + this.logString + this.count + ' time(s)')
    return this.logs;

  }



}
