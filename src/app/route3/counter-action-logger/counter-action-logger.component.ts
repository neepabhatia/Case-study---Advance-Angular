import { Component, Input, OnInit } from '@angular/core';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-counter-action-logger',
  templateUrl: './counter-action-logger.component.html',
  styleUrls: ['./counter-action-logger.component.css']
})
export class CounterActionLoggerComponent implements OnInit {
  @Input() counterValue: any;
  @Input() pausedCounterValue : number = 0;
  requiredData : loggerObject[] = [];

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void{
    if(this.counterValue!= undefined){
      this.dataEnhancer();
    }
  }
  dataEnhancer(): void{
    var demoObj: loggerObject = {actionType:'', timeStamping: 0}
    if(this.counterValue.actionType == "Start"){
      demoObj.actionType = "Started";
      demoObj.timeStamping = Number(this.counterValue.counterValue);
    }else if(this.counterValue.actionType == "Pause"){
      demoObj.actionType = "Paused";
      demoObj.timeStamping = this.pausedCounterValue;
    }
    this.requiredData.push(demoObj);
    if(this.counterValue.actionType == "Reset"){
      this.requiredData = [];
    }
  }

}
