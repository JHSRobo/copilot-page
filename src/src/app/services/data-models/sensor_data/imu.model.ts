
export class ImuModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number;
        };
    };
    orientation: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    orientation_covarience: [any];
    angular_velocity: {
        x: number;
        y: number;
        z: number;
    };
    angular_velocity_covarience: [any];
    linear_acceleration: {
        x: number;
        y: number;
        z: number;
    };
    linear_acceleration_covarience: [any];
}
