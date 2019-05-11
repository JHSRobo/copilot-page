import { Injectable } from '@angular/core';
import '../../../assets/roslib.js';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  initialize() {
    benthicSpecies = new ROSLIB.Service({
      ros: ros,
      name:
    })
  }
  constructor() { }
}
