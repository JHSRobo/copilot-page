import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import '../../../../assets/roslib.js';


@Injectable({
  providedIn: 'root'
})
export class ImuService {
  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });
  // Define subject to hold data values
  imu: BehaviorSubject<any> = new BehaviorSubject('Untouched');
  // Initializer to be called every time BMP280 is going to be used
  initialize() {
    // Get Data from ROS bmp280 Topic
    // @ts-ignore
    const imuSubscriber = new ROSLIB.Topic({
      ros: this.ros,
      name: '/rov/imu',
      messageType: 'sensor_msgs/Imu'
    });

    // Subscribe to bmpListener
    imuSubscriber.subscribe((message) => {
      this.imu.next(message);
    });
  }
  // Define data getter
  getData(): Observable<any> { return this.imu.asObservable(); }
}
