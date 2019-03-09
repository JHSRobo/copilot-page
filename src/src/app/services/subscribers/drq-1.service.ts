import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class Drq1Service {
  // Horizontal thruster percentages
  // Creates object with the ROS library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  // Define subject to hold data values
  drq1: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initializer to be called every time horizontal drive is going to be used
  initialize() {
    // Get Data from ROS horzontal drive Topic
    // @ts-ignore
    const drq1Listener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/drq1250_1',
      messageType: 'drq1250/DRQ1250'
    });

    // Subscribe to horizontal drive listener
   drq1Listener.subscribe((message) => {
      this.drq1.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> { return this.drq1.asObservable(); }
}

