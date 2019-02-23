import {Component, OnInit} from '@angular/core';
import {Drq1Service} from '../../../../services/subscribers/drq-1.service';
import {DrqModel} from '../../../../services/data-models/drq.model';

@Component({
    selector: 'app-settingsdrq1',
    templateUrl: './settingsdrq1.component.html',
    styleUrls: ['./settingsdrq1.component.css']
})
export class Settingsdrq1Component implements OnInit {
    voltage: number; // DRQ Voltage Out
    current: number; // DRQ Current Out
    temp: number; // DRQ Temperature

    constructor(
        private drq1Service: Drq1Service
    ) {
    }

    ngOnInit(): void {
        this.drq1Service.initialize();
        this.drq1Service.getData().subscribe((msg: DrqModel) => {
            try {
                this.voltage = msg.Vout;
                this.current = msg.Iout;
                this.temp = msg.tempurature;
            } catch (error) {
            }
        });
    }
}
