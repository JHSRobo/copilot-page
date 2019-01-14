import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrqComponent} from './drq.component';

describe('DrqComponent', () => {
    let component: DrqComponent;
    let fixture: ComponentFixture<DrqComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DrqComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrqComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
