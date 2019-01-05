import {Component, OnInit} from '@angular/core';
import {SensitivityService} from '../../../services/publishers/sensitivity.service';
import {SensitivityModel} from '../../../services/data-models/sensitivity.model';

@Component({
    selector: 'app-thruster-sensativity',
    templateUrl: './thruster-sensitivity.component.html',
    styleUrls: ['./thruster-sensitivity.component.css']
})
export class ThrusterSensitivityComponent implements OnInit {

    max = 1.0;
    min = 0.0;
    step = .05;
    name = 'Thruster Sensitivity';
    sensitivity: SensitivityModel = {
        l_scale: .5,
        v_scale: .5,
        a_scale: .5,
    };

    constructor(private sensitivityService: SensitivityService) {
    };

    update() {
        this.sensitivityService.publish(this.sensitivity);
    }

    ngOnInit() {
        this.sensitivityService.initialize();
        this.sensitivityService.getData().subscribe((msg: SensitivityModel) => {
            msg ? this.sensitivity = msg : null;
        });
    }
}
