import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  divContainers:any = [];
  ngOnInit(){
   
    this.divContainers.push(this.divContainers.length);
   
  }
  
  ShowAlert(container:any){
    alert(`Button ${container+1} of Div ${container+1} is clicked`);
  
  }
  
  @HostListener("document:scroll", [])
  onWindowScroll() {
    this.divContainers.push(this.divContainers.length);
  }
  constructor() { }
  
 
  }
  