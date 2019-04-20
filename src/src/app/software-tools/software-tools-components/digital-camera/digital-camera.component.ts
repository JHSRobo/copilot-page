import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-camera',
  templateUrl: './digital-camera.component.html',
  styleUrls: ['./digital-camera.component.css']
})
export class DigitalCameraComponent implements OnInit {

  name = 'Digital Camera';
  cameras = ['Camera 1', 'Camera 2', 'Camera 3'];
  constructor() { }

  ngOnInit() {
  }

}
