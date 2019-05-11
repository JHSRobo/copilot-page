import { Component, OnInit } from '@angular/core';
import {ShapeDetectService} from '../../../services/subscribers/shape-detect.service';
import {ServicesService} from '../../../services/services.service';

@Component({
  selector: 'app-benthic-species',
  templateUrl: './benthic-species.component.html',
  styleUrls: ['./benthic-species.component.css']
})
export class BenthicSpeciesComponent implements OnInit {
  name = 'Benthic Species';
  circles = 0;
  triangles = 0;
  squares = 0;
  rectangles = 0;
  result;

  async callAndReturn(mode) {
    this.result = await this.serviceService.callService(mode);
    if (this.circles) {
      this.circles = this.result.circles;
      this.triangles = this.result.triangles;
      this.squares = this.result.square;
      this.rectangles = this.result.rectangle;
    }
    console.log(this.result);
  }

  constructor(
      private serviceService: ServicesService
  ) { }

  ngOnInit() {
    this.serviceService.initialize();
  }
}
