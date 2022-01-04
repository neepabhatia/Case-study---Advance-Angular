import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {
  counterValue: any;
  pausedCounterValue: any;
  constructor() { }

  ngOnInit(): void {

  }

  GetChildData(data:any){  
    this.counterValue = data;
 }  
  GetPauseData(data: any){
    this.pausedCounterValue = data;
  }
 ngOnChanges(): void{
   this.GetChildData(this.counterValue);
   this.GetPauseData(this.pausedCounterValue);
 }

}
