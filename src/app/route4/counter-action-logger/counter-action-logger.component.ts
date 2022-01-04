import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-counter-action-logger',
  templateUrl: './counter-action-logger.component.html',
  styleUrls: ['./counter-action-logger.component.css']
})
export class CounterActionLoggerComponent implements OnInit {
  counterValue: any;
  pausedCounterValue: number = 0;
  requiredData: loggerObject[] = [];

  constructor(private dataService: DataService) {
    this.dataEnhancer();
  }

  ngOnInit(): void { }

  ngOnChanges(): void {
  }
  dataEnhancer(): void {
    this.dataService.subject1.pipe(tap((data) => {
      var demoObj: loggerObject = { actionType: '', timeStamping: 0 }

      this.counterValue = data;

      if (this.counterValue.actionType == "Start") {
        demoObj.actionType = "Started";
        demoObj.timeStamping = Number(this.counterValue.counterValue);
        this.requiredData.push({ actionType: "Started", timeStamping: Number(this.counterValue.counterValue) });
      }
      else if (this.counterValue.actionType == "Pause") {
        demoObj.actionType = "Paused";
        this.dataService.pausedValue.
          subscribe(data1 => {
            this.pausedCounterValue = data1;
            demoObj.timeStamping = this.pausedCounterValue;
          })
        setTimeout(() => {
          this.requiredData.push({ actionType: "Paused", timeStamping: this.pausedCounterValue });
        }, 10);
      }
      if (this.counterValue.actionType == "Reset") {
        this.requiredData = [];
      }
    })).
      subscribe(data => {

      })
  }
}
