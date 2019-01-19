import {Component, OnInit} from '@angular/core';
import { ImuService } from "../../../services/subscribers/sensors/imu.service";
import { ImuModel } from "../../../services/data-models/sensor_data/imu.model";
import {catchError} from "rxjs/operators";

declare var Snap: any;
declare var mina: any;

@Component({
    selector: 'app-velocity-graph',
    templateUrl: './velocity-graph.component.html',
    styleUrls: ['./velocity-graph.component.css']
})
export class VelocityGraphComponent implements OnInit {

    name = 'ROV Orientation';

    check = 1;
    frame;
    background;
    hand1;

    constructor(private imuService: ImuService) { }

    ngOnInit() {
        this.imuService.initialize();
        // @ts-ignore
        this.frame = Snap(".frame");
        this.background = this.frame.circle(96, 96, 90).attr({
            fill: "#2E2F3E",
            stroke: "#8D90AC",
            strokeWidth: 4
        });

        this.hand1 = this.frame.rect(87, 54, 18, 66, 9).attr({fill: "#e1dfdc"});
        this.hand1.animate({transform: "r" + 200 + "," + 96 + "," + 96}, 500, mina.elastic);
        // console.log(this.hand1);
        // window.setInterval(() => {
        //     // this.check += 1;
        //     // this.check = (this.check > 60) ? this.check = 1 : this.check;
        //     // @ts-ignore
        //     this.hand1.animate({transform: "r" + this.check * 6 + "," + 96 + "," + 96}, 500, mina.elastic);
        //     console.log("Update " + this.check);
        // }, 1000)
        this.imuService.getData().subscribe(data => {
            try {
                this.check = Math.round(data.orientation.z * (180/Math.PI));
            } catch(error) {
                console.log(error)
            }
            this.hand1.animate({transform: "r" + this.check + "," + 96 + "," + 96}, 500, mina.elastic);
        });
    }

    update() {
        this.frame = Snap(".frame");
        this.hand1 = this.frame.rect(87, 54, 18, 66, 9).attr({fill: "#344d5a"});
        this.check += 1;
        // this.check = (this.check > 60) ? this.check = 1 : this.check;
        // @ts-ignore
        this.hand1.animate({transform: "r" + this.check * 6 + "," + 96 + "," + 96}, 500, mina.elastic);
        console.log("Update " + this.check);
    }
}
