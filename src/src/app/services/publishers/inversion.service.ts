import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';

import '../../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class InversionService {

  inversionTopic; // Object to handle inversion

  lastMessageState: GenericModel = undefined; // The last published message
  oldState;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url : 'ws://master:9090'
  });

  inversionState: BehaviorSubject<any> = new BehaviorSubject(undefined);

  initialize() {
    // @ts-ignore
    this.inversionTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/inversion',
      messageType: 'std_msgs/UInt8'
    });

    this.inversionTopic.subscribe((msg: GenericModel) => { // Subscribe to inversiont topic
        // console.log(msg + " this.inversionTopic.subscribe");
        if (msg !== undefined) { this.inversionState.next(msg); } // Add value to behavior subject
    });
  }

  publish(data) {
    const number = Number(data);
    // @ts-ignore
    if (data !== this.lastMessageState) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        data: number
      });
      this.lastMessageState = data;
      this.inversionTopic.publish(message);
    }
  }

  getData(): Observable<GenericModel> { return this.inversionState.asObservable(); } // Returns observable with data

}
