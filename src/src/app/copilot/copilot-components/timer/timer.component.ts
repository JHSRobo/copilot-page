import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-module',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  name = 'Stopwatch';
  seconds = 0;
  minutes = 0;
  timerInterval;
  stopped = true;

  startTimer() {
    // const start = Date.now();
    // Set temporary seconds and minutes variables
    this.timerInterval = setInterval(() => {
      this.seconds = this.seconds + 1;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
      }
    }, 1000);
    this.stopped = false;
  }

  resetTimer() {
    this.seconds = '00';
    this.minutes = '00';
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.stopped = true;
  }

}
