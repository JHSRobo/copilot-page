import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import '../../../../assets/roslib.js';


@Injectable({
  providedIn: 'root'
})
export class HumidityService {
    // Creates object with the ROS library
    // @ts-ignore <= Makes ts happy, wont error
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url : 'ws://master:9090'
    });
    // Define subject to hold data values
    humidity: BehaviorSubject<any> = new BehaviorSubject('Untouched');
    // Initializer to be called every time BMP280 is going to be used
    initialize() {
        // Get Data from ROS bmp280 Topic
        // @ts-ignore
        const humiditySubscriber = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/humidity',
            messageType: 'sensor_msgs/RelativeHumidity'
        });

        // Subscribe to bmpListener
        humiditySubscriber.subscribe((message) => {
            this.humidity.next(message);
        });
    }
    // Define data getter
    getData(): Observable<any> { return this.humidity.asObservable(); }
}
