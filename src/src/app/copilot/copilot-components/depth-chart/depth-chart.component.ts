import {AfterViewInit, Component,} from '@angular/core';
import {Chart} from 'chart.js';
import {Ms5837Service} from '../../../services/subscribers/sensors/ms5837.service';
import {Ms5837Data} from '../../../services/data-models/ms5837.model';

@Component({
    selector: 'app-depth-chart',
    templateUrl: './depth-chart.component.html',
    styleUrls: ['./depth-chart.component.css']
})

export class DepthChartComponent implements AfterViewInit {
    rovDepth: number; // ROV Depth in Meters
    multiplier: number;

    constructor(private ms5837Service: Ms5837Service) {
    }

    round(value, precision) {
        this.multiplier = Math.pow(10, precision || 0);
        return Math.round(value * this.multiplier) / this.multiplier;
    }

    ngAfterViewInit() {
        this.ms5837Service.initialize();
        this.ms5837Service.getData().subscribe((msg: Ms5837Data) => {
            // console.log("Got Depth (I'm in depth-chart.ts)")
            // Try catch error because first function call gets undefined value
            try {
                this.rovDepth = this.round(msg.depth, 1);
            } catch (err) {
            }
        });
    }
}
