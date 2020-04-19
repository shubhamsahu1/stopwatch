import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor() { }

  intervalId = 0;
  message = '';
  seconds = 11;

  startCount: number = 0
  stopCount: number = 0

  setTime(time: number) {
    this.seconds = time
  }

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() { }

  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
