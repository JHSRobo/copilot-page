export class Bmp280Model {
    altitudeM: number;
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
    pressureA: number;
    pressureP: number;
    tempC: number;
}
