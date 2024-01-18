import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'assignmentFour';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(logCount: number) {
    console.log(logCount);
    if (logCount % 2 === 0) {
      this.evenNumbers.push(logCount)
    } else {
      this.oddNumbers.push(logCount)
    }
  }

}
