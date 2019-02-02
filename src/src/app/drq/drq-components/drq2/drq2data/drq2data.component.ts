import { Component, OnInit } from '@angular/core';
import { Drq2Service } from '../../../../services/subscribers/drq-2.service';
import { DrqModel } from '../../../../services/data-models/drq.model';

@Component({
  selector: 'app-drq2data',
  templateUrl: './drq2data.component.html',
  styleUrls: ['./drq2data.component.css']
})
export class Drq2dataComponent implements OnInit {

    name = 'DRQ1250 2 Data';

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

    constructor( private drq2: Drq2Service ) {}
    ngOnInit() {
        // Initialize Humidity Service
        this.drq2.initialize();
        this.drq2.getData().subscribe((msg: DrqModel) => {
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
