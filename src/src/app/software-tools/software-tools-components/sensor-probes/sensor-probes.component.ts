import { Component, OnInit } from '@angular/core';
import { phSensorService } from "../../../services/subscribers/sensors/phSensor.service";
import { GenericModel } from "../../../services/data-models/generic.model";
import { Ms5837Service } from "../../../services/subscribers/sensors/ms5837.service";
import { Ms5837Data } from "../../../services/data-models/ms5837.model";
import {RelativeHumidityModel} from "../../../services/data-models/sensor_data/relative-humidity.model";
import {TemperatureModel} from "../../../services/data-models/sensor_data/temperature.model";

@Component({
  selector: 'app-sensor-probes',
  templateUrl: './sensor-probes.component.html',
  styleUrls: ['./sensor-probes.component.css']
})
export class SensorProbesComponent implements OnInit {
  name = 'Sensor Probes';
  rovTemperature: number;
  rovPh: number;
  multiplier: number;

  round(value, precision) {
    this.multiplier = Math.pow(10, precision || 0);
    return Math.round(value * this.multiplier) / this.multiplier;
  }

  constructor(
        private phService: phSensorService,
        private tempService: Ms5837Service
  ) {
  }


  ngOnInit() {
    this.phService.initialize();
    this.phService.getData().subscribe((msg: RelativeHumidityModel) => {
      try {
        this.rovPh = this.round(msg.relative_humidity, 1);
      } catch (error) {
      }
    });
    // Initialize Temperature Service
    this.tempService.initialize();
    this.tempService.getData().subscribe((msg: TemperatureModel) => {
      try {
        this.rovTemperature = this.round(msg.temperature, 1);
      } catch (error) {
      }
    });
  }

}
