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
  displaySeconds = '00';
  displayMinutes = '00';
  timerInterval;
  stopped = true;

  keyPress(event) {
      if (event.key == 't') {
        if (this.stopped) {
          this.startTimer();
        } else {
          this.stopTimer();
        }
      } else if (event.key == 'y') {
        if (this.stopped) {
          this.resetTimer();
        }
      } else {
      }
  }

  startTimer() {
    // const start = Date.now();
    // Set temporary seconds and minutes variables
    let tempSeconds = this.seconds;
    let tempMinutes = this.minutes;
    this.timerInterval = setInterval(() => {
      // ------
      // Slightly more precise version but delta is always mean seconds, probably longer
      // to do it the way I'm doing it below. It takes system date/time at start
      // and at each loop variation. Read readme.md for more info.
      // let delta = Date.now() - start; // milliseconds elapsed since start
      // tempSeconds = Math.floor(delta / 1000).toString(); // in seconds
      // ------
      if (tempSeconds >= 60) {
        tempSeconds = 0;
        tempMinutes += 1;
      }
      // If more than 9 seconds, print number, if not, add a 0 in front
      this.displaySeconds = (tempSeconds > 9 ? tempSeconds.toString() : '0' + tempSeconds.toString());
      this.seconds = tempSeconds;
      this.minutes = tempMinutes;
      // If more than 9 minutes, print number, if not, add a 0 in front.
      this.displayMinutes = (tempMinutes > 9 ? tempMinutes.toString() : ((tempMinutes) ? '0' + tempMinutes.toString() : '00'));
      // Add a number to temp seconds
      tempSeconds += 1;
    }, 1000);
    this.stopped = false;
  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.displaySeconds = '00';
    this.displayMinutes = '00';
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
