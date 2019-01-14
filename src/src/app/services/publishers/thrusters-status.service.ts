import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThrustersStatusService {

    thrusterStatusTopic;

    thrusterStatusState: BehaviorSubject<any> = new BehaviorSubject(null);

    // Creates object with the ROS Library
    // @ts-ignore
    ros = new ROSLIB.Ros({
        // Set listen URL for ROS Communication
        url: 'ws://master:9090'
    });

    // Set variable for data
    initialize() {
        // @ts-ignore
        this.thrusterStatusTopic = new ROSLIB.Topic({
            ros: this.ros,
            name: '/rov/thruster_status',
            messageType: 'std_msgs/Bool'
        });

        this.thrusterStatusTopic.subscribe((msg) => {
            this.thrusterStatusState.next(msg);
        });
    }

    publish(data) { // Define data publisher that publishes to topic
        // @ts-ignore
        const message = new ROSLIB.Message({
            data: data
        });
        // console.log(data);
        this.thrusterStatusTopic.publish(message);
    }

    getData(): Observable<any> { // Define data getter that returns observable
        return this.thrusterStatusState.asObservable();
    }

}
