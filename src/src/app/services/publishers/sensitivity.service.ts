import {Injectable} from '@angular/core';
import '../../../assets/roslib';
import {SensitivityModel} from '../data-models/sensitivity.model';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SensitivityService {

    sensitivityTopic;

    sensitivityState: BehaviorSubject<SensitivityModel> = new BehaviorSubject(null);


    // Creates object with the ROS Library
    // @ts-ignore
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS Communication
        url: 'ws://master:9090'
    });

    // Set variable for data
    initialize() {
        // @ts-ignore
        this.sensitivityTopic = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/sensitivity',
            messageType: 'rov_control_interface/rov_sensitivity'
        });

        this.sensitivityTopic.subscribe((msg) => { // Subscribe to topic
            this.sensitivityState.next(msg); // Add value to behavior subject
        })
    }

    publish(data: SensitivityModel) { // Define ROS topic publisher
        // @ts-ignore
        const message = new ROSLIB.Message({
            l_scale: data.l_scale,
            a_scale: data.a_scale,
            v_scale: data.v_scale
        });
        this.sensitivityTopic.publish(message);
    }

    getData(): Observable<SensitivityModel> { // Define data getter that returns observable
        return this.sensitivityState.asObservable();
    }
}
