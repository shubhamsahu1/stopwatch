import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public clickedEvent: Event;
  childEventClicked(event: Event) {
   // this.clickedEvent = event;
   console.log(event)
  }
}
