import { Component, OnInit } from '@angular/core';
import { RpiTelemetryService } from "../../../services/subscribers/rpi-telemetry.service";

@Component({
  selector: 'app-tubedata',
  templateUrl: './tubedata.component.html',
  styleUrls: ['./tubedata.component.css']
})
export class TubedataComponent {

    name = 'Tube Data';

}
