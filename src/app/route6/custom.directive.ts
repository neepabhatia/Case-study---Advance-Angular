import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @HostBinding() newDiv:any;

  constructor(private elRef:ElementRef) { }
  ngOnInit(): void {
  
  }
  @HostListener('scroll') scrollDown(eventData:Event)
  {
    //document.createElement('div');
  }


}
