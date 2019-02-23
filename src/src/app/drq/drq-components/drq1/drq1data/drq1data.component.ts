import { Component, OnInit } from '@angular/core';
import { Drq1Service } from '../../../../services/subscribers/drq-1.service';
import { DrqModel } from '../../../../services/data-models/drq.model';

@Component({
    selector: 'app-drq1data',
    templateUrl: './drq1data.component.html',
    styleUrls: ['./drq1data.component.css']
})
export class Drq1dataComponent implements OnInit {

    name = 'DRQ1250 1 Data';

    multiplier: number;
    drqTemp: number;
    vIn: number;
    vOut: number;
    iOut: number;
    pOut: number;
    round(value, precision) {
        this.multiplier = Math.pow(10, precision || 0);
        return Math.round(value * this.multiplier) / this.multiplier;
    }

    constructor( private drq1: Drq1Service ) {}
    ngOnInit() {
        // Initialize Humidity Service
        this.drq1.initialize();
        this.drq1.getData().subscribe((msg: DrqModel) => {
            try {
                this.drqTemp = this.round(msg.tempurature, 1);
                this.vIn = this.round(msg.Vin, 1);
                this.vOut = this.round(msg.Vout, 1);
                this.iOut = this.round(msg.Iout, 1);
                this.pOut = this.round(msg.Pout, 1);
            } catch (error) { }
        });
    }

}
