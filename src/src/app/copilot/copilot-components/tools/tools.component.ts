import {Component, Input, OnInit } from '@angular/core';
import {ElectromagnetService} from '../../../services/publishers/electromagnet.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

    name = 'Tools';
    electromagnet = false;

    constructor(public electromagnetService: ElectromagnetService) {
    }

    electromagnetButtonSwitch(msg?) {
      this.electromagnet = !this.electromagnet;
      try { this.electromagnet = msg.data; } catch (error) {}
      this.electromagnetService.publish(this.electromagnet);
    }

    ngOnInit() {
        this.electromagnetService.initialize();
        this.electromagnetService.getData().subscribe((msg) => {
          this.electromagnetButtonSwitch(msg);
        });
    }

}
