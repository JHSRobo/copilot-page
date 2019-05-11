import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class Drq2Service {
  // Horizontal thruster percentages
  // Creates object with the ROS library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  // Define subject to hold data values
  drq2: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initializer to be called every time horizontal drive is going to be used
  initialize() {
    // Get Data from ROS horzontal drive Topic
    // @ts-ignore
    const drq2Listener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/drq1250_2/status',
      messageType: 'drq1250/DRQ1250'
    });

    // Subscribe to horizontal drive listener
   drq2Listener.subscribe((message) => {
      this.drq2.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> { return this.drq2.asObservable(); }
}

