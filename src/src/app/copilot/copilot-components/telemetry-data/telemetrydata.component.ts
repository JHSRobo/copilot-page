import {Component, OnInit} from '@angular/core';
import {HumidityService} from '../../../services/subscribers/sensors/humidity.service';
import {PressureService} from '../../../services/subscribers/sensors/pressure.service';
import {RelativeHumidityModel} from '../../../services/data-models/sensor_data/relative-humidity.model';
import {FluidPressureModel} from '../../../services/data-models/sensor_data/fluid-pressure.model';
import {TemperatureModel} from '../../../services/data-models/sensor_data/temperature.model';
import {Drq1Service} from '../../../services/subscribers/drq-1.service';
import {DrqModel} from '../../../services/data-models/drq.model';
import { Bmp280Service} from '../../../services/subscribers/sensors/bmp280.service';

@Component({
    selector: 'app-telemetrydata',
    templateUrl: './telemetrydata.component.html',
    styleUrls: ['./telemetrydata.component.css']
})
export class TelemetrydataComponent implements OnInit {
    name = 'ROV Telemetry Data';
    rovTemperature: number; // ROV temperature in Celsius
    rovPressure: number; // ROV Altitude in atm (can change to pascal)
    rovHumidity: number; // ROV humidity in percent?
    rovVoltage: number; // DRQ Voltage
    rovCurrent: number; // DRQ Current
    multiplier: number;

    round(value, precision) {
        this.multiplier = Math.pow(10, precision || 0);
        return Math.round(value * this.multiplier) / this.multiplier;
    }

    constructor(
        private humidityService: HumidityService,
        private bmp280Service: Bmp280Service,
        private pressureService: PressureService,
        private drqService: Drq1Service
    ) {
    }

    ngOnInit() {
        // Initialize Humidity Service
        this.humidityService.initialize();
        this.humidityService.getData().subscribe((msg: RelativeHumidityModel) => {
            try {
                this.rovHumidity = this.round(msg.relative_humidity, 1);
            } catch (error) {
            }
        });
        // Initialize Temperature Service
        this.bmp280Service.initialize();
        this.bmp280Service.getData().subscribe((msg: TemperatureModel) => {
            try {
                this.rovTemperature = this.round(msg.temperature, 1);
            } catch (error) {
            }
        });
        this.pressureService.initialize();
        this.pressureService.getData().subscribe((msg: FluidPressureModel) => {
            try {
                this.rovPressure = this.round(msg.fluid_pressure, 1);
            } catch (error) {
            }
        });
        this.drqService.initialize();
        this.drqService.getData().subscribe((msg: DrqModel) => {
            try {
                this.rovVoltage = msg.Vout;
                this.rovCurrent = msg.Iout;
            } catch (error) {
            }
        });
    }

}
