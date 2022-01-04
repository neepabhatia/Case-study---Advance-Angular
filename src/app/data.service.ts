import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimerObject } from 'src/models/timerObject';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  subject1=new Subject<TimerObject>();
  pausedValue=new Subject<number>();

  constructor() { }
}
