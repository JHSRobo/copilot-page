import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {BehaviorSubject, Observable} from 'rxjs';
import { GenericModel } from '../data-models/generic.model';

@Injectable({
  providedIn: 'root'
})
export class CameraSelectService {

  cameraSelectTopic;

  cameraSelectState: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  oldState;

  // Creates object with the ROS Library
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS Communication
    url: 'ws://master:9090'
  });

  initialize() {
    // @ts-ignore
    this.cameraSelectTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/camera_select',
      messageType: 'std_msgs/UInt8'
    });

    this.cameraSelectTopic.subscribe((msg: GenericModel) => { // Subscribe to camera select topic
      if (msg != this.oldState) {
        this.cameraSelectState.next(msg); // Add value to behavior subject
      }
    });
  }

  publish(data) { // Define data publisher that publishes to topic
    const number = Number(data);
    // @ts-ignore
    const message = new ROSLIB.Message({
      data: number
    });
    // console.log(data);
    if (data != this.oldState) {
      this.cameraSelectTopic.publish(message);
    }
    this.oldState = data;
  }

  getData(): Observable<GenericModel> { // Define data getter that returns observable
    return this.cameraSelectState.asObservable();
  }

}
