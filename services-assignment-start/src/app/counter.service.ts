import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  toActiveCount(){
    this.inactiveToActiveCounter++;
    console.log('To active count: '+ this.inactiveToActiveCounter)
  }

  toInactiveCount(){
    this.activeToInactiveCounter++;
    console.log('To inactive count: '+ this.activeToInactiveCounter)
  }
}
