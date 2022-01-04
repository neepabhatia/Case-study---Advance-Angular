export class TimerObject {
    constructor(counterValue: number,actionType: string,timestamping: Date){
       this.counterValue =  counterValue;
       this.actionType = actionType;
       this.timestamping = timestamping;
    }

    counterValue : number;
 
    actionType : string;
 
    timestamping: Date;
  }
 