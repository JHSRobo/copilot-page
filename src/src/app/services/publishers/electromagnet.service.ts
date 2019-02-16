import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';

import '../../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class ElectromagnetService {

  electromagnetTopic; // Object to handle inversion

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url : 'ws://master:9090'
  });

  electromagnetState: BehaviorSubject<GenericModel> = new BehaviorSubject(undefined);

  initialize() {
    // @ts-ignore
    this.inversionTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/electromagnet_control',
      messageType: 'std_msgs/Bool'
    });

    this.electromagnetTopic.subscribe((msg: GenericModel) => { // Subscribe to inversiont topic
        // console.log(msg + " this.inversionTopic.subscribe");
        if (msg !== undefined) { this.electromagnetState.next(msg); } // Add value to behavior subject
    });
  }

  publish(data) {
    const number = Number(data);
    // @ts-ignore
    const message = new ROSLIB.Message({
      data : number
    });
    try { this.electromagnetTopic.publish(message); } catch (error) { console.log(error); }
  }

  getData(): Observable<GenericModel> { return this.electromagnetState.asObservable(); } // Returns observable with data

}
