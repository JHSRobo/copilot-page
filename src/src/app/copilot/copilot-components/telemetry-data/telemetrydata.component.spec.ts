import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TelemetrydataComponent} from './telemetrydata.component';

describe('TelemetrydataComponent', () => {
    let component: TelemetrydataComponent;
    let fixture: ComponentFixture<TelemetrydataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TelemetrydataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TelemetrydataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
