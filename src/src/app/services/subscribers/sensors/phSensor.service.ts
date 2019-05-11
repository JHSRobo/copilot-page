import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class phSensorService {
  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });
  // Define subject to hold data values
  phSensor: BehaviorSubject<any> = new BehaviorSubject(undefined);
  // Initializer to be called every time BMP280 is going to be used
  initialize() {
    // Get Data from ROS bmp280 Topic
    // @ts-ignore
    const phSensorListener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/sen10972',
      messageType: 'std_msgs/Float64.msg'
    });

    // Subscribe to bmpListener
    phSensorListener.subscribe((message) => {
      // console.log('Recieved Message on ' + ms5837Listener.name + ' : ' + message);
      this.phSensor.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> {
    if (this.phSensor !== undefined) {
        return this.phSensor.asObservable();
    }
  }
}
