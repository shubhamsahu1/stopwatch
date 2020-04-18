import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
import { ControlComponent } from './control/control.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    TimerComponent,
    ControlComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
