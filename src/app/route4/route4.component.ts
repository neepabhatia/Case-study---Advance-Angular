import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.css']
})
export class Route4Component implements OnInit {
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
