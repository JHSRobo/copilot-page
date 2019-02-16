import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';

import '../../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class ElectromagnetService {

  electromagnetTopic; // Object to handle electromgnet publication
  oldState;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url : 'ws://master:9090'
  });

  electromagnetState: BehaviorSubject<GenericModel> = new BehaviorSubject(undefined);

  initialize() {
    // @ts-ignore
    this.electromagnetTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/electromagnet_control',
      messageType: 'std_msgs/Bool'
    });

    this.electromagnetTopic.subscribe((msg: GenericModel) => { // Subscribe to electronmagnet topic
        // console.log(msg + " this.electronmagnetTopic.subscribe");
        if (msg !== undefined && msg !== this.oldState) { this.electromagnetState.next(msg); } // Add value to behavior subject
    });
  }

  publish(data) {
    const datamessage = data;
    // @ts-ignore
    if (data !== this.oldState) {
      const message = new ROSLIB.Message({
        data : datamessage
      });
      this.electromagnetTopic.publish(message);
    }
  }

  getData(): Observable<GenericModel> { return this.electromagnetState.asObservable(); } // Returns observable with data

}
