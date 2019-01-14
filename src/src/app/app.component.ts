import {Component, OnInit} from '@angular/core';
import {RosService} from './services/subscribers/ros.service';
import {HorizontalDriveService} from './services/subscribers/horizontal-drive.service';
import {VerticalDriveService} from './services/subscribers/vertical-drive.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // The constructor takes the roslibservice import statement and assigns it
    // Done before onInit
    constructor(private RosService: RosService, private horizontal: HorizontalDriveService, private vertical: VerticalDriveService) {
    }

    // OnInit initializes the Roslib service, and gets data to test connection
    ngOnInit() {
        this.RosService.initialize();
        this.horizontal.initialize();
        this.vertical.initialize();
    }

}
