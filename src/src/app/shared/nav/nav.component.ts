import {AfterContentChecked, AfterViewChecked, Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {MatSnackBar} from '@angular/material';

import {ThrustersStatusService} from '../../services/publishers/thrusters-status.service';
import {InversionService} from '../../services/publishers/inversion.service';
import { RosService } from "../../services/subscribers/ros.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    icons = [
        {
            src: '../../../assets/House(Unselected).svg',
            clickedsrc: '../../../assets/House(Selected).svg',
            selected: false,
            link: '/copilot'
        },
        {
            src: '../../../assets/Bolt(Unselected).svg',
            clickedsrc: '../../../assets/Bolt(Selected).svg',
            selected: false,
            link: '/drq'
        },
        {
            src: '../../../assets/CircuitBoard(Unselected).svg',
            clickedsrc: '../../../assets/CircuitBoard(Selected).svg',
            selected: false,
            link: '/sensor-telemetry'
        },
        {
            src: '../../../assets/Settings(Unselected).svg',
            clickedsrc: '../../../assets/Settings(Selected).svg',
            selected: false
        }
    ];

    thrusterStatus = false;
    inversion = 0; // Default inversion is forward facing forward
    visible = false; // Dialog Visibility

    partyModevisible = false; // Party mode dialog Visibility
    audio = new Audio('../../../assets/Party.mp3'); // Part Music


    constructor(
        private thrusterStatusService: ThrustersStatusService,
        public thrusterNotification: MatSnackBar,
        private inversionService: InversionService,
        private rosService: RosService,
        public inversionNotification: MatSnackBar,
        public rosNotification: MatSnackBar) {
    }

    thrustersToggle() { // Toggles UI and code, doesn't publish to topic
        // Changes thruster status
        this.thrusterStatus = !this.thrusterStatus;
        // Opens snackbar (that's the real name) that displays thruster status
      try {
        this.thrusterNotification.open(this.thrusterStatus ? 'Thrusters Enabled' : 'Thrusters Disabled', 'Exit', {
          duration: 3000,
          panelClass: ['snackbar']
        });
      } catch (error) {
        console.log(error);
      }
    }

    rosServiceToggle(msg) {
      try{
        this.rosNotification.open(msg ? 'ROS Connected' : 'ROS Disconnected', 'Exit', {
          duration: 20000,
          panelClass: ['snackbar']
        });
      } catch (error) {
        console.log(error);
      }
    }

    inversionChange(number: number) { // Toggles UI and code, doesn't publish to topic
        console.log(number + ' Inversion Change Function');
        // Change inversion number
        this.inversion = number;
        // Opens snackbar that displays inversion number
        // TODO Figure out way to do this better? It gives error that ExfpressionChangedAfterItHasBeenChecked if  a real value was passed through the snackbar
        try {
            this.inversionNotification.open('Inversion mode changed to ' + this.inversion, 'Exit', {
                duration: 3000,
                panelClass: ['snackbar']
            });
        } catch (error) {
            console.log(error);
        }

    }

    keyPress(character) {
        // Switches thruster direction mode based on wasd and throttle status based on space
        switch (character.key) {
            case 'w':
                this.inversionChange(0); // Forward is forward
                this.inversionService.publish(0);
                break;

            case 'a':
                this.inversionChange(1); // Left is front
                this.inversionService.publish(this.inversion);
                break;

            case 'd':
                this.inversionChange(2); // Right is front
                this.inversionService.publish(this.inversion);
                break;

            case 's':
                this.inversionChange(3); // Back is front
                this.inversionService.publish(this.inversion);
                break;

            case ' ':
                this.thrustersToggle();
                this.thrusterStatusService.publish(this.thrusterStatus);
        }
    }

    // Resets icons except for selected icon
    selected(icon) {
        for (const iconAll of this.icons) {
            iconAll.selected = false;
        }
        icon.selected = true;
    }

    ngOnInit() {
        // Creates and subscribes too observable that listens for keypresses, runs keypress function as callback
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));

        this.thrusterStatusService.initialize();
        this.thrusterStatusService.getData().subscribe((msg) => {
            try {
                (this.thrusterStatus !== msg.data) ? this.thrustersToggle() : null; // Toggles thrusters if topics dont match local and real
            } catch (error) {
            }
        });

        this.inversionService.initialize();
        this.inversionService.getData().subscribe((msg) => {
            try {
                // Changes inversion if it's not the same and it exists in the message (avoids bug)
                (this.inversion !== msg.data && msg !== undefined) ? this.inversionChange(msg.data) : null;
            } catch (error) {
            }
        });

        this.rosService.initialize();
        this.rosService.connectedStatus().subscribe((msg) => {
            try {
                this.rosServiceToggle(msg);
            } catch (error) { }
        });
    }

    // -------------------------
    // Party Mode
    // -------------------------

    openConfirm() {
        this.visible = true;
    }

    close() {
        this.visible = false;
    }

    confirm() {
        this.visible = false;
        this.audio.play();
        this.partyModevisible = true;
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.partyModevisible = false;
    }
}
