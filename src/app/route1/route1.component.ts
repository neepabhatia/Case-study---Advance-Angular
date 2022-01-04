import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
containers:any = [];

@HostBinding() scroll:any;

ngOnInit(){
 
  this.containers.push(this.containers.length);
  this.containers.push(this.containers.length);
  this.containers.push(this.containers.length);
}

ShowAlert(container:any){
  alert(`Button ${container+1} is clicked`);

}

@HostListener("document:scroll", [])
onWindowScroll() {
  this.containers.push(this.containers.length);
}
constructor() { }

add() {
  this.containers.push(this.containers.length);
}
}
