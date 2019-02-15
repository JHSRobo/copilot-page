import { Component, OnInit } from '@angular/core';
import { CameraSelectService } from '../../../services/publishers/camera-select.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main-camera-module',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements OnInit {

    // Initializes CameraSelectService
    constructor(public cameraSelectService: CameraSelectService) {}

    // Declares name for window, arrays for cameras (should probably change to objects)
    name = 'Main Camera';
    camera1 = false;
    camera2 = false;
    camera3 = false;
    camera4 = false;
    camera5 = false;
    camera6 = false;
    camera7 = false;
    camera8 = false;
    camera9 = false;

    keyPress(event) {
        if (event.key == 1) {
            this.cameraSwitch(1);
        } else if (event.key == 2) {
            this.cameraSwitch(2);
        } else if (event.key == 3) {
            this.cameraSwitch(3);
        } else if (event.key == 4) {
            this.cameraSwitch(4);
        } else if (event.key == 5) {
            this.cameraSwitch(5);
        } else if (event.key == 6) {
            this.cameraSwitch(6);
        } else if (event.key == 7) {
            this.cameraSwitch(7);
        } else if (event.key == 8) {
            this.cameraSwitch(8);
        } else if (event.key == 9) {
            this.cameraSwitch(9);
        } else { }
    }

    resetCameras() {
        this.camera1 = false;
        this.camera2 = false;
        this.camera3 = false;
        this.camera4 = false;
        this.camera5 = false;
        this.camera6 = false;
        this.camera7 = false;
        this.camera8 = false;
        this.camera9 = false;
    }

    // Onclick passes event that contains ton of information
    cameraSwitch(value) {
        if (value == 1) {
            this.resetCameras();
            this.camera1 = true;
            this.cameraSelectService.publish(1);
        } else if (value == 2) {
            this.resetCameras();
            this.camera2 = true;
            this.cameraSelectService.publish(2);
        } else if (value == 3) {
            this.resetCameras();
            this.camera3 = true;
            this.cameraSelectService.publish(3);
        } else if (value == 4) {
            this.resetCameras();
            this.camera4 = true;
            this.cameraSelectService.publish(4);
        } else if (value == 5) {
            this.resetCameras();
            this.camera5 = true;
            this.cameraSelectService.publish(5);
        } else if (value == 6) {
            this.resetCameras();
            this.camera6 = true;
            this.cameraSelectService.publish(6);
        } else if (value == 7) {
            this.resetCameras();
            this.camera7 = true;
            this.cameraSelectService.publish(7);
        } else if (value == 8) {
            this.resetCameras();
            this.camera8 = true;
            this.cameraSelectService.publish(8);3
        } else if (value == 9) {
            this.resetCameras();
            this.camera9 = true;
            this.cameraSelectService.publish(9);
        }
    }

    ngOnInit() {
        this.camera1 = true;
        // Initialize camera select service
        this.cameraSelectService.initialize();
        // Creates and subscribes too an observable that listens for key presses. Callback function runs the keypress function
        fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
        // Listens for camera publishers from rqt copilot page
        this.cameraSelectService.getData().subscribe( (msg) => {
            this.cameraSwitch(msg.data);
        });
    }

}
