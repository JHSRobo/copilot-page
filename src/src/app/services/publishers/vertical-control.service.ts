import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {VerticalDriveModel} from '../data-models/vertical-drive.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerticalControlService {

  verticalcontrolTopic;

  lastMessageState: VerticalDriveModel = undefined; // The last published message

  verticalcontrolState: BehaviorSubject<VerticalDriveModel> = new BehaviorSubject(null);


  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url: 'ws://master:9090'
  });

  // Set variable for data
  initialize() {
    // @ts-ignore
    this.verticalcontrolTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/cmd_vertical_vdrive',
      messageType: 'vector_drive/thrusterPercents'
    });

    this.verticalcontrolTopic.subscribe((msg) => { // Subscribe to topic
      this.verticalcontrolState.next(msg); // Add value to behavior subject
    });
  }

  publish(data: VerticalDriveModel) { // Define ROS topic publisher
    if (data !== this.lastMessageState) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        t1: data.t1,
        t2: data.t2,
        t3: data.t3,
        t4: data.t4
      });
      this.lastMessageState = data; // Sets lastMessage state to this data to prevent double publishing data
      this.verticalcontrolTopic.publish(message); // Publishes message
    }
  }

  getData(): Observable<VerticalDriveModel> { // Define data getter that returns observable
    return this.verticalcontrolState.asObservable();
  }
}
