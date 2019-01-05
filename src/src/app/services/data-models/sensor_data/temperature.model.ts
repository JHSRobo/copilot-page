export class TemperatureModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number;
        };
    };
    temperature: number;
    variance: number;
}
