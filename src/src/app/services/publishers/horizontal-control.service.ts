import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {HorizontalDriveModel} from '../data-models/horizontal-drive.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorizontalControlService {

  horizontalcontrolTopic;

  lastMessageState: HorizontalDriveModel = undefined; // The last published message

  horizontalcontrolState: BehaviorSubject<HorizontalDriveModel> = new BehaviorSubject(null);


  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url: 'ws://master:9090'
  });

  // Set variable for data
  initialize() {
    // @ts-ignore
    this.horizontalcontrolTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/cmd_horizontal_vdrive',
      messageType: 'vector_drive/thrusterPercents'
    });

    this.horizontalcontrolTopic.subscribe((msg) => { // Subscribe to topic
      this.horizontalcontrolState.next(msg); // Add value to behavior subject
    });
  }

  publish(data: HorizontalDriveModel) { // Define ROS topic publisher
    if (data !== this.lastMessageState) {
      // @ts-ignore
      const message = new ROSLIB.Message({
        t1: data.t1,
        t2: data.t2,
        t3: data.t3,
        t4: data.t4
      });
      this.lastMessageState = data; // Sets lastMessage state to this data to prevent double publishing data
      this.horizontalcontrolTopic.publish(message); // Publishes message
    }
  }

  getData(): Observable<HorizontalDriveModel> { // Define data getter that returns observable
    return this.horizontalcontrolState.asObservable();
  }
}
