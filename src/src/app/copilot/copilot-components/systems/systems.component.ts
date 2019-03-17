import { Component, OnInit } from '@angular/core';
import { HorizontalControlService } from '../../../services/publishers/horizontal-control.service';
import { VerticalControlService } from '../../../services/publishers/vertical-control.service';
import { HorizontalDriveModel } from '../../../services/data-models/horizontal-drive.model';
import { VerticalDriveModel } from '../../../services/data-models/vertical-drive.model';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

    name = 'ROV Systems';
    constructor(private horizontalService: HorizontalControlService,
      private verticalService: VerticalControlService) {}

    horizontalthrusters: HorizontalDriveModel = {
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0
    };

    verticalthrusters: VerticalDriveModel = {
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0
    };

    setIntervalX(callback, delay, repetitions) {
      var x = 0;
      var intervalID = setInterval(function () {

        callback();

        if (++x === repetitions) {
          clearInterval(intervalID);
        }
      }, delay);
    }

    upwardstab() {
      this.setIntervalX(function(){
        this.verticalthrusters.t1 = -100;
        this.verticalthrusters.t2 = -100;
        this.verticalthrusters.t3 = -100;
        this.verticalthrusters.t4 = -100;
        this.verticalService.publish(this.verticalthrusters)
      }, 200, 10);
    }

    downwardstab() {
      this.setIntervalX(function(){
        this.verticalthrusters.t1 = 100;
        this.verticalthrusters.t2 = 100;
        this.verticalthrusters.t3 = 100;
        this.verticalthrusters.t4 = 100;
        this.verticalService.publish(this.verticalthrusters)
      }, 200, 10);
    }

    rightstab() {
      this.setIntervalX(function(){
        this.horizontalthrusters.t1 = 100;
        this.horizontalthrusters.t2 = -100;
        this.horizontalthrusters.t3 = -100;
        this.horizontalthrusters.t4 = 100;
        this.horizontalService.publish(this.horizontalthrusters)
      }, 200, 10);
    }

    leftstab() {
      this.setIntervalX(function(){
        this.horizontalthrusters.t1 = -100;
        this.horizontalthrusters.t2 = 100;
        this.horizontalthrusters.t3 = 100;
        this.horizontalthrusters.t4 = -100;
        this.horizontalService.publish(this.horizontalthrusters)
      }, 200, 10);
    }

    ngOnInit() {

      this.horizontalService.initialize();
      this.horizontalService.getData().subscribe((msg: HorizontalDriveModel) => {
        if (msg) { this.horizontalthrusters = msg; }
      });
      this.verticalService.initialize();
      this.verticalService.getData().subscribe((msg: HorizontalDriveModel) => {
        if (msg) { this.verticalthrusters = msg; }
      });
    }
}
