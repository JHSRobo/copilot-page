import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';

@Injectable({
  providedIn: 'root'
})
export class ElectromagnetService {

  electromagnetTopic;

  lastMessageState: GenericModel = undefined; // The last published message

  electromagnetState: BehaviorSubject<any> = new BehaviorSubject('Untouched');

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url: 'ws://master:9090'
  });

  initialize() {
    // @ts-ignore
    this.electromagnetTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/electromagnet_control',
      messageType: 'std_msgs/Bool'
    });

    this.electromagnetTopic.subscribe((data: GenericModel) => { // Subscribe to camera select topic
      if (data !== this.lastMessageState) {
        this.electromagnetState.next(data); // Add value to behavior subject
      }
    });
  }

  publish(data) { // Define data publisher that publishes to topic
    const number = data;
    if (data !== this.lastMessageState) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        data: number
      });
      this.lastMessageState = data;
      this.electromagnetTopic.publish(message);
    }

  }

  getData(): Observable<GenericModel> { // Define data getter that returns observable
    return this.electromagnetState.asObservable();
  }

}
