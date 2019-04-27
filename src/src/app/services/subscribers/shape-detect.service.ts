import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import '../../../assets/roslib.js';
import {ShapeDetectModel} from '../data-models/shape-detect.model';

@Injectable({
    providedIn: 'root'
})
export class ShapeDetectService {
    // Horizontal thruster percentages
    // Creates object with the ROS library
    // @ts-ignore
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS communication
        url : 'ws://master:9090'
    });

    // Define subject to hold data values
    shapes: BehaviorSubject<any> = new BehaviorSubject('Untouched');
    // Initializer to be called every time horizontal drive is going to be used
    initialize() {
        // Get Data from ROS horzontal drive Topic
        // @ts-ignore
        const shapeDetectListener = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/shape_output',
            messageType: 'shape_detection/shape_detect'
        });

        // Subscribe to horizontal drive listener
        shapeDetectListener.subscribe((message) => {
            this.shapes.next(message);
        });
    }
    // Define data getter
    getData(): Observable<ShapeDetectModel> { return this.shapes.asObservable(); }
}
