import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor() { }
  @Output() timerEvent = new EventEmitter<string>();
  limit;
  intervalId = 0;
  messages: string[] = [];
  seconds = 0;
  startFlag: boolean = false
  startCount: number = 0
  stopCount: number = 0

  setTime(time: number) {
    this.seconds = time
  }

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() { }

  ngOnDestroy() { this.clearTimer(); }
  start() {
    if(this.seconds <= 0){
      alert("please enter timer value")
      return
    }
    if (this.startFlag) {
      this.clearTimer();
      this.messages.push(`paused at ${this.seconds}`);
      this.timerEvent.emit("stop")
    } else {
      this.countDown();
      this.timerEvent.emit("start")
    }
    this.startFlag = !this.startFlag

  }
  reset() {
    this.clearTimer();
    this.intervalId = 0;
    this.seconds = 0
    this.messages = []
    this.timerEvent.emit("reset")
    this.limit = ""
    this.startFlag = false
    
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds <= 0) {
        this.reset()
      } 
    }, 1000);
  }

}
