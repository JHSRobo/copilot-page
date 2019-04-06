import {Component, OnInit} from '@angular/core';
import { SensitivityService } from '../../../services/publishers/sensitivity.service';
import { SensitivityModel } from '../../../services/data-models/sensitivity.model';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-thruster-sensitivity',
  templateUrl: './thruster-sensitivity.component.html',
  styleUrls: ['./thruster-sensitivity.component.css']
})
export class ThrusterSensitivityComponent implements OnInit {

  constructor(private sensitivityService: SensitivityService) {}

  max = 1.0;
  min = 0.0;
  step = .05;
  name = 'Thruster Sensitivity';
  sensitivity: SensitivityModel = {
    l_scale: .5,
    v_scale: .5,
    a_scale: .5,
  };

  keyPress(event) {
      if (event.key == '.' && event.ctrlKey == true) {
        this.sensitivity.l_scale = this.sensitivity.l_scale + 0.05;
      } else if (event.key == '/' && event.ctrlKey == true) {
        this.sensitivity.l_scale = this.sensitivity.l_scale - 0.05;
      } else if (event.key == '.' && event.altKey == true) {
        this.sensitivity.v_scale = this.sensitivity.l_scale + 0.05;
      } else if (event.key == '/' && event.altKey == true) {
        this.sensitivity.v_scale = this.sensitivity.l_scale - 0.05;
      } else if (event.key == '.' && event.shiftKey == true) {
        this.sensitivity.a_scale = this.sensitivity.l_scale + 0.05;
      } else if (event.key == '/' && event.shiftKey == true) {
        this.sensitivity.a_scale = this.sensitivity.l_scale - 0.05;
      } else {
      }
  }

  update() {
    this.sensitivityService.publish(this.sensitivity);
  }

  ngOnInit() {
    this.sensitivityService.initialize();
    this.sensitivityService.getData().subscribe((msg: SensitivityModel) => {
      if (msg) { this.sensitivity = msg; }
    });
    this.update();
    // Creates and subscribes too an observable that listens for key presses. Callback function runs the keypress function
    fromEvent(document, 'keyup').pipe().subscribe(character => this.keyPress(character));
  }
}
