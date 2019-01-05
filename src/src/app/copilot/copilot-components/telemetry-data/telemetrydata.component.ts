import {Component, OnInit} from '@angular/core';
import {TemperatureService} from '../../../services/subscribers/sensors/temperature.service';
import {HumidityService} from '../../../services/subscribers/sensors/humidity.service';
import {PressureService} from '../../../services/subscribers/sensors/pressure.service';
import {RelativeHumidityModel} from '../../../services/data-models/sensor_data/relative-humidity.model';
import {FluidPressureModel} from '../../../services/data-models/sensor_data/fluid-pressure.model';
import {TemperatureModel} from '../../../services/data-models/sensor_data/temperature.model';

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
    multiplier: number;

    constructor(
        private humidityService: HumidityService,
        private temperatureService: TemperatureService,
        private pressureService: PressureService) {
    }

    round(value, precision) {
        this.multiplier = Math.pow(10, precision || 0);
        return Math.round(value * this.multiplier) / this.multiplier;
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
        this.temperatureService.initialize();
        this.temperatureService.getData().subscribe((msg: TemperatureModel) => {
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
    }

}
