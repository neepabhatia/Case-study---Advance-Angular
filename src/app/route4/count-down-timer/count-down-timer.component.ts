import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

import { interval, Observable, Subscription, timer } from 'rxjs';

import { take, map, filter } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { TimerObject } from 'src/models/timerObject';



@Component({

  selector: 'app-count-down-timer',

  templateUrl: './count-down-timer.component.html',

  styleUrls: ['./count-down-timer.component.css']

})

export class CountDownTimerComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();;
  countDown: any;
  flag = false;

  counter$: Observable<any> = new Observable();

  counterPause$: Subscription = new Subscription();

  count: any = 0;

  counterValue: any;

  storeValue: TimerObject = new TimerObject(0, '', new Date());

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    if ((this.count) == undefined) {
      this.count = "Please Input the value of Timer";
    }
    this.dataService.subject1.subscribe(data => {
      this.storeValue = data;
      if (this.storeValue.actionType == "Start") {
        this.count = this.storeValue.counterValue;
        this.myTimer(this.count);
      }
      else if (this.storeValue.actionType == "Pause") {
        this.dataService.pausedValue.next(this.count);
        this.stopTimer();
      } else {
        this.stopTimer();
        this.count = 0;
      }
    })
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

  ngOnChanges(): void { }

  ngOnDestroy(): void { }

}