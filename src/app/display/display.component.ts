import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  start: number = 0
  stop: number = 0
  messages: string[] = []
  private formatAMPM(date) { // This is to display 12 hour format like you asked
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  timerEvent(event) {
    if (event === "start") {
      this.start++
      const myDate = new Date()
      this.messages.push(`started at ${myDate.getMonth()+ '/' +myDate.getDate()+ '/' +myDate.getFullYear()+ ' ' +this.formatAMPM(myDate)}`)
    } else if (event === "stop") {
      this.stop++
    } else if (event === "reset") {
      this.start = 0
      this.stop = 0
      this.messages = []
    }



  }
}
