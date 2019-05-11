import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class Ms5837Service {
  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });
  // Define subject to hold data values
  ms5837: BehaviorSubject<any> = new BehaviorSubject(undefined);
  // Initializer to be called every time BMP280 is going to be used
  initialize() {
    // Get Data from ROS bmp280 Topic
    // @ts-ignore
    const ms5837Listener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/ms5837',
      messageType: 'ms5837/ms5837_data'
    });

    // Subscribe to bmpListener
    ms5837Listener.subscribe((message) => {
      // console.log('Recieved Message on ' + ms5837Listener.name + ' : ' + message);
      this.ms5837.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> {
    if (this.ms5837 !== undefined) {
      return this.ms5837.asObservable();
    }
  }
}
