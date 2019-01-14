export class FluidPressureModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number;
        };
    };
    fluid_pressure: number;
    variance: number;
}
