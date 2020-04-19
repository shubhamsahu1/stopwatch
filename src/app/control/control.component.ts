import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor() { }

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
    if (this.startFlag) {
      this.clearTimer();
      this.messages.push(`paused at ${this.seconds}`);
      ++this.stopCount
    } else {
      this.countDown();
      ++this.startCount
    }
    this.startFlag = !this.startFlag

  }
  reset() {
    this.clearTimer();
    this.intervalId = 0;
    this.seconds = 0
    this.messages = []
    this.stopCount = 0
    this.startCount = 0
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
      } else {
        if (this.seconds < 0) { this.clearTimer(); }
      }
    }, 1000);
  }

}
