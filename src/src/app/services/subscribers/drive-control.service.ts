import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})

export class DriveControlService {
  // Creates object with the ROS library
  // @ts-ignore <= Makes ts happy, wont error
  ros = new ROSLIB.Ros({
      // Set listen URL for ROS communication
      url : 'ws://master:9090'
  });
  // Initialize variables to hold ROS data
  driveControl: BehaviorSubject<any> = new BehaviorSubject('Untouched');

  // Initialize function sets everything up, called on a ngOnInit in app.component

  initialize() {
      // Get Data from ROS Drive Control Listener Topic
      // @ts-ignore
      const driveControlListener = new ROSLIB.Topic({
          ros : this.ros, // Points to ROS variable
          name : '/drive_control/parameter_updates', // Topic Name
          messageType : 'dynamic_reconfigure/Config' // Message Type
      });

      // Subscribe to ROS data
      driveControlListener.subscribe((message) => {
          // console.log('Recieved Message on ' + driveControlListener.name + ' : ' + message.bools);
          // Adds next value to pass through to observable driveControl
          this.driveControl.next(message);
      });
  }

  // Getters
  // Get data variable and return it as observable
  getData(): Observable<any> { return this.driveControl.asObservable(); }
}

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// Data is gotten through subscription
// this.driveControlService.getDriveControlData().subscribe(msg => {
//   this.data = msg;
//   console.log(msg);
// });
