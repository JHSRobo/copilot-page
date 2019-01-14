import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Statusdrq1Component} from './statusdrq1.component';

describe('Statusdrq1Component', () => {
    let component: Statusdrq1Component;
    let fixture: ComponentFixture<Statusdrq1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Statusdrq1Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Statusdrq1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
