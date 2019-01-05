// Define model for ms5837 service data format
export class Ms5837Data {
    altitudeM: number;
    depth: number;
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
    tempC: number;
    tempF: number;
}
