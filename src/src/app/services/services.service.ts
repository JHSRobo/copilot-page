import { Injectable } from '@angular/core';
import '../../assets/roslib.js';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // @ts-ignore
  ros = new ROSLIB.Ros({
    // Set listen URL for ROS communication
    url : 'ws://master:9090'
  });

  benthicSpecies;
  request;
  shapeCount: BehaviorSubject<any>;

  initialize() {
    // @ts-ignore
    this.benthicSpecies = new ROSLIB.Service({
      ros: this.ros,
      name: '/start_shape_detect',
      serviceType: 'shape_detection/shape_detect'
    });
  }

  async callService(mode) {
    // @ts-ignore
    this.request = ROSLIB.ServiceRequest({
      int: mode
    });
    await this.benthicSpecies.callService(this.request, (result) => {
      this.shapeCount = result;
    });
    if (this.shapeCount) { return this.shapeCount; };
  }
  constructor() { }
}
