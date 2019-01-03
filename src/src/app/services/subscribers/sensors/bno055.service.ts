import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import '../../../../assets/roslib';

@Injectable({
  providedIn: 'root'
})
export class Bno055Service {

  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  // Set variables for data
  bno055: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  bno055Info: BehaviorSubject<any> = new BehaviorSubject('Untouched');

  initialize() {
    // Get Data from bno055 sensor
    // Quaternion Orientation, linear acceleration, angular velocity
    // @ts-ignore
    const bno055Listener = new ROSLIB.Topic({
        ros: this.ros,
        name: '/rov/bno055',
        messageType: 'geometry_msgs/Imu'
    });
    // Subscribe to bmpListener
    bno055Listener.subscribe((message) => {
        console.log('Recieved Message on ' + bno055Listener.name + ' : ' + message);
        this.bno055.next(message);
    });
    // -------------------------------------------------
    // Initialize data from bno055 info topic
    // @ts-ignore
    const bno055InfoListener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/bno055_info',
      messageType: 'bno055/bno055_info'
    });
    // Subscribe to topic
    bno055InfoListener.subscribe((message) => {
      console.log('Recieved Message on ' + bno055InfoListener.name + ' : ' + message);
      this.bno055Info.next(message);
    });
  }

  getData(): Observable<any> { return this.bno055.asObservable(); }
  getInfoData(): Observable<any> { return this.bno055Info.asObservable(); }
}
