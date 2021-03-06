import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RosService {

    // Creates object with the ROS library
    // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url: 'ws://master:9090'
    });

    public connected: BehaviorSubject<boolean> = new BehaviorSubject(false);

    initialize() {
        // Listens for error from ROS and logs it
        this.ros.on('error', function (error) {
            // console.log(error);
        });

        // Find out exactly when we made a connection.
        this.ros.on('connection', () => {
          this.connected.next(true);
        });
        // Logs when connection is closed
        this.ros.on('close', () => {
          this.connected.next(false);
        });
    }

     connectedStatus(): Observable<boolean> {
        return this.connected.asObservable();
    }
}

