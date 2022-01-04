import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewChecked, } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TimerObject } from 'src/models/timerObject';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent implements OnInit {
  pausedCounterValue: any = 0;
  counterOutput: any;
  outputObject: TimerObject;
  counter1: number = 0;
  startCheckFlag: boolean = false;
  @ViewChild('f') f: any;
  constructor(private dataService: DataService) {
    this.outputObject = new TimerObject(this.counter1, '', new Date());
  }

  ngOnInit(): void {
    this.dataService.pausedValue.subscribe(data => {
      this.counter1 = data;
    })
  }
  ngAfterViewInit(): void { }

  ngOnChanges(): void { }
  startorpause() {
    if (this.counter1 == undefined) {
      alert("Please Enter Value in Input field to Start Timer")
    }


    else {
      this.startCheckFlag = !this.startCheckFlag;
      if (this.startCheckFlag) {
        this.outputObject.actionType = "Start";

      } else {
        this.outputObject.actionType = "Pause";
      }
      this.outputObject.timestamping = new Date();
      this.outputObject.counterValue = this.counter1;
      this.outputObject = Object.assign({}, this.outputObject); // changing obj reference for ngOnChanges

      this.dataService.subject1.next(this.outputObject);
    }

  }
  resetvalues() {
    this.counter1 = 0;
    this.outputObject.actionType = "Reset";
    this.outputObject.counterValue = this.counter1;
    this.outputObject = Object.assign({}, this.outputObject); // changing obj reference for ngOnChanges

    this.dataService.subject1.next(this.outputObject);
  }
}
