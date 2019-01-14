import {SensortelemetryModule} from './sensortelemetry.module';

describe('SensortelemetryModule', () => {
    let sensortelemetryModule: SensortelemetryModule;

    beforeEach(() => {
        sensortelemetryModule = new SensortelemetryModule();
    });

    it('should create an instance', () => {
        expect(sensortelemetryModule).toBeTruthy();
    });
});
