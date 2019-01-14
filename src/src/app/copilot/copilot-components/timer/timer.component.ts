import {Component} from '@angular/core';

@Component({
    selector: 'app-timer-module',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent {

    name = 'Stopwatch';
    seconds = '00';
    minutes = '00';
    timerInterval;
    stopped = true;

    startTimer() {
        // const start = Date.now();
        // Set temporary seconds and minutes variables
        let tempSeconds = 0;
        let tempMinutes = 0;
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
                tempMinutes = 1;
            }
            // If more than 9 seconds, print number, if not, add a 0 in front
            this.seconds = (tempSeconds > 9 ? tempSeconds.toString() : '0' + tempSeconds.toString());
            // If more than 9 minutes, print number, if not, add a 0 in front.
            this.minutes = (tempMinutes > 9 ? tempMinutes.toString() : ((tempMinutes) ? '0' + tempMinutes.toString() : '00'));
            // Add a number to temp seconds
            tempSeconds += 1;
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
