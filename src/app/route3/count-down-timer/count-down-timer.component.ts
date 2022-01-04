import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

import { interval, Observable, Subscription, timer } from 'rxjs';

import { take, map, filter } from 'rxjs/operators';
import { TimerObject } from 'src/models/timerObject';



@Component({

  selector: 'app-count-down-timer',

  templateUrl: './count-down-timer.component.html',

  styleUrls: ['./count-down-timer.component.css']

})

export class CountDownTimerComponent implements OnInit, OnDestroy {
  @Output() pausedCounterValue  = new EventEmitter<number>(); //ask

  sub: Subscription = new Subscription();;
  countDown: any ;
  flag = false;
  count: any = 0;

  @Input() counterValue: any ;

  constructor() {}

  ngOnInit(): void {
    if((this.count) == undefined){
      this.count = "Please Input the value of Timer";
    }
  }

  myTimer(value: number) {
    this.count = value;
    this.countDown = timer(0, 1000).subscribe((x) => {
      this.count = this.count - 1;
    });

    this.sub = interval(500).subscribe((x) => {
      if (this.count === 0) {
        this.countDown.unsubscribe();
      }
    });
  }

  stopTimer() {
      this.countDown.unsubscribe();
      this.sub.unsubscribe();
  }

  ngOnChanges(): void {
    if(this.counterValue != undefined){

      if(this.counterValue.actionType == "Start"){
        this.count = this.counterValue.counterValue;
        this.myTimer(this.count);
        }
      else if(this.counterValue.actionType == "Pause"){
        this.pausedCounterValue.emit(this.count);
        this.stopTimer();
      } else{
        this.stopTimer();
        this.count = 0;
      }
    }
    }

  ngOnDestroy(): void {}

}