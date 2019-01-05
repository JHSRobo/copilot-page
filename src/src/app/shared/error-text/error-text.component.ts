import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-error-text',
    templateUrl: './error-text.component.html',
    styleUrls: ['./error-text.component.css']
})
export class ErrorTextComponent {
    @Input('name') name: string;
    @Input('align') alignment: string;
    @Input('unit') unit: string;
}
