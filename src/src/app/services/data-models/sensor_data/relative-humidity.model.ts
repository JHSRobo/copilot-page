// Relative Humidity Message
export class RelativeHumidityModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number;
        };
    };
    relative_humidity: number;
    variance: number;
}
