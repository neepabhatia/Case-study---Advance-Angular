import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-action-counter',
  templateUrl: './action-counter.component.html',
  styleUrls: ['./action-counter.component.css']
})
export class ActionCounterComponent implements OnInit {
  counterValue: any;
  requiredData : loggerObject[] = [];
  counterStart : number = 0;
  counterPause : number = 0;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataEnhancer();
  }
  ngOnChanges(): void{}

  dataEnhancer(): void{
    this.dataService.subject1.pipe( tap((data)=>{
       var demoObj: loggerObject = {actionType:'', timeStamping: 0}
      this.counterValue=data;

      if(this.counterValue.actionType == "Start"){
        demoObj.actionType = "Started";
        demoObj.timeStamping = Number(this.counterValue.counterValue);   
       this.requiredData.push({actionType:"Started",date:this.counterValue.timestamping}) ;
       this.counterStart++;
    }
    else if(this.counterValue.actionType == "Pause"){
      demoObj.actionType = "Paused";
      this.counterPause++;
      this.requiredData.push({actionType:"Paused",date:this.counterValue.timestamping}) ;   
    }
 

    if(this.counterValue.actionType == "Reset"){
      this.requiredData = [];
      this.requiredData = [];
      this.counterStart = 0;
      this.counterPause = 0;
    }
    })).subscribe(data=>{
  })
  }

}
