import {Component, Input, OnInit } from '@angular/core';
import {ElectromagnetService} from '../../../services/publishers/electromagnet.service';
import {TroutGroutService} from '../../../services/publishers/trout-grout.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

    name = 'Tools';
    electromagnet = false;
    troutGrout = false;

    constructor(public electromagnetService: ElectromagnetService, private troutGroutService: TroutGroutService) {
    }

    electromagnetButtonSwitch() {
      this.electromagnet = !this.electromagnet;
      this.electromagnetService.publish(this.electromagnet);
    }

    troutGroutSwitch() {
        this.troutGrout = !this.troutGrout;
        this.troutGroutService.publish(this.troutGrout);
    }

    ngOnInit() {
        this.electromagnetService.initialize();
        this.electromagnetService.getData().subscribe((msg) => {
          this.electromagnet = msg.data;
        });
        this.troutGroutService.initialize();
        this.troutGroutService.getData().subscribe((msg) => {
            this.troutGrout = msg.data;
        });
    }

}
