import {Directive, HostListener, OnInit} from '@angular/core';
import { ThrustersStatusService } from '../services/publishers/thrusters-status.service';
import { Observable, fromEvent } from 'rxjs';
import {filter} from 'rxjs/operators';

@Directive({
  selector: '[appCopilot]'
})
export class CopilotDirective implements OnInit {

  constructor(private thrusterStatusService: ThrustersStatusService) { }

  log(data) {
    console.log('log ', data);
  }

  ngOnInit() {
    fromEvent(document, 'keyup').pipe().subscribe(s => this.log(Event));
  }

}
