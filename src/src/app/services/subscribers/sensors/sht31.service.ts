import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../../assets/roslib.js';

@Injectable({
    providedIn: 'root'
})
export class Sht31Service {
    // Python I2C interface for publishing SHT31 humidity and tempurature data.
    // Creates object with the ROS library
    // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url: 'ws://master:9090'
    });
    // Define subject to hold data values
    sht31: BehaviorSubject<any> = new BehaviorSubject('Untouched');

    // Initializer to be called every time sht31 is going to be used
    initialize() {
        // Get Data from ROS sht31 Topic
        // @ts-ignore
        const sht31Listener = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/sht31',
            messageType: 'sht31/sht31_data'
        });

        // Subscribe to bmpListener
        sht31Listener.subscribe((message) => {
            //console.log('Recieved Message on ' + sht31Listener.name + ' : ' + message);
            //console.log(message);
            this.sht31.next(message);
        });
    }

    // Define data getter
    getData(): Observable<any> {
        return this.sht31.asObservable();
    }
}
