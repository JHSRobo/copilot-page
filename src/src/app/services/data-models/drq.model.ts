export class DrqModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
    Vin;
    Vout;
    Iout;
    Pout;
    tempurature;
}
