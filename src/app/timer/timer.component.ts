import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() seconds:number
  constructor() { }

  ngOnInit(): void {
  }
  
}
