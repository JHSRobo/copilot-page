import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VelocityGraphComponent} from './velocity-graph.component';

describe('VelocityGraphComponent', () => {
    let component: VelocityGraphComponent;
    let fixture: ComponentFixture<VelocityGraphComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VelocityGraphComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VelocityGraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
