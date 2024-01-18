import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('oneSecondEmitter') intervalFired = new EventEmitter<number>();
  interval: any;
  emitCounter = 0;


  constructor() { }

  ngOnInit(): void {
  }


  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.emitCounter + 1);
      this.emitCounter++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  allClear(){
    clearInterval(this.interval);
    console.clear();
    location.reload();
  }

}
