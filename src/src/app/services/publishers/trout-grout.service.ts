import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';
import {BoolModel} from '../data-models/bool.model';

@Injectable({
  providedIn: 'root'
})
export class TroutGroutService {

  troutGroutTopic;

  lastMessageState: GenericModel = undefined; // The last published message

  troutGroutMotorState: BehaviorSubject<any> = new BehaviorSubject('Untouched');

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url: 'ws://master:9090'
  });

  initialize() {
    // @ts-ignore
    this.troutGroutTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/trout_grout',
      messageType: 'std_msgs/Bool'
    });

    this.troutGroutTopic.subscribe((data: GenericModel) => { // Subscribe to trout grout topic
      if (data !== this.lastMessageState) {
        this.troutGroutMotorState.next(data); // Add value to behavior subject
      }
    });
  }

  publish(data) { // Define data publisher that publishes to topic
    const state = data;
    if (data !== this.lastMessageState) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        data: state
      });
      this.lastMessageState = data;
      this.troutGroutTopic.publish(message);
    }

  }

  getData(): Observable<BoolModel> { // Define data getter that returns observable
    return this.troutGroutMotorState.asObservable();
  }

}
