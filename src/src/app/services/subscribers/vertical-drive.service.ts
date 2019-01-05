import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';

@Injectable({
    providedIn: 'root'
})
export class VerticalDriveService {
    // Vertical thruster percentages
    // Creates object with the ROS library
    // @ts-ignore
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url: 'ws://master:9090'
    });

    // Define subject to hold data values
    verticalDrive: BehaviorSubject<any> = new BehaviorSubject('Untouched');

    // Initializer to be called every time vertical drive is going to be used
    initialize() {
        // Get Data from ROS vertical drive Topic
        // @ts-ignore
        const verticalDriveListener = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/cmd_vertical_vdrive',
            messageType: 'vector_drive/thrusterPercents'
        });

        // Subscribe to verticalDriveLIsteenr
        verticalDriveListener.subscribe((message) => {
            this.verticalDrive.next(message);
        });
    }

    // Define data getter
    getData(): Observable<any> {
        return this.verticalDrive.asObservable();
    }
}
