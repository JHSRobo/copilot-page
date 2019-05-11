import { Component, OnInit } from '@angular/core';
import {ShapeDetectService} from '../../../services/subscribers/shape-detect.service';
import {ShapeDetectModel} from '../../../services/data-models/shape-detect.model';

@Component({
  selector: 'app-benthic-species',
  templateUrl: './benthic-species.component.html',
  styleUrls: ['./benthic-species.component.css']
})
export class BenthicSpeciesComponent implements OnInit {
  name = 'Benthic Species';
  circles = 0;
  triangles = 0;
  square = 0;
  rectangle = 0;

  mode1Benthic() {

  }

  mode2Benthic() {

  }

  constructor(
      private shapeDetection: ShapeDetectService
  ) { }

  ngOnInit() {
    this.shapeDetection.initialize();
    this.shapeDetection.getData().subscribe((msg: ShapeDetectModel) => {
      try {
        this.circles = msg.circles;
        this.triangles = msg.triangles;
        this.square = msg.square;
        this.rectangle = msg.rectangle;
      } catch (error) { }
    });
  }
}
