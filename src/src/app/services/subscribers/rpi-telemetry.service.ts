import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class RpiTelemetryService {
  // Vertical thruster percentages
  // Creates object with the ROS library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  // Define subject to hold data values
  rpiTelemetry: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initializer to be called every time vertical drive is going to be used
  initialize() {
    // Get Data from ROS vertical drive Topic
    // @ts-ignore

    // !!!THIS IS INCOMPLETE!!!
    const rpiTelemetryListener = new ROSLIB.Topic({
      ros: this.ros,
      name: '',
      messageType: ''
    });

    // Subscribe to verticalDriveLIsteenr
    rpiTelemetryListener.subscribe((message) => {
      this.rpiTelemetry.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> { return this.rpiTelemetry.asObservable(); }
}
