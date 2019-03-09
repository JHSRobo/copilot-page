export interface DrqModel {
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
    Vin: number;
    Vout: number;
    Iout: number;
    Pout: number;
    tempurature: number;
    dutyCycle: number;
    switchingFrequency: number;
    busy: boolean;
    off: boolean;
    vout_ov_fault: boolean;
    iout_oc_fault: boolean;
    vin_uv_fault: boolean;
    temp_fault: boolean;
    cml_fault: boolean;
    vout_fault: boolean;
    iout_fault: boolean;
    input_fault: boolean;
    pwr_gd: boolean;
    fan_fault: boolean;
    other: boolean;
    unknown: boolean;
}
