// Define model for sht31 service data format
export class Sht31Data {
    tempC: number;
    tempF: number;
    humidity: number;
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
}
