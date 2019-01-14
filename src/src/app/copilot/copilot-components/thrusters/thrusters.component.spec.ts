import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThrustersComponent} from './thrusters.component';

describe('ThrustersComponent', () => {
    let component: ThrustersComponent;
    let fixture: ComponentFixture<ThrustersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThrustersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThrustersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
