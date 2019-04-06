import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-timer-module',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  name = 'Stopwatch';
  seconds = 0;
  minutes = 0;
  timerInterval;
  stopped = true;

  keyPress(event) {
      if (event.key == 't') {
          this.startTimer();
      } else if (event.key == 'y') {
          this.stopTimer();
          this.resetTimer();
      } else {
      }
  }

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
    this.seconds = 0;
    this.minutes = 0;
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.stopped = true;
  }

  ngOnInit() {
    // Creates and subscribes too an observable that listens for key presses. Callback function runs the keypress function
    fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
  }

}
