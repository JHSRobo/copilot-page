import {Component} from '@angular/core';

@Component({
    selector: 'app-secondary-camera-module',
    templateUrl: './secondary-camera.component.html',
    styleUrls: ['./secondary-camera.component.css']
})
export class SecondaryCameraComponent {

    name = 'Secondary Camera';
    cameras = ['Camera 1', 'Camera 2', 'Camera 3', 'Camera 4', 'Camera 5', 'Camera 6', 'Camera 7', 'Camera 8', 'Camera 9'];

}
