import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrqsettingsComponent} from './drqsettings.component';

describe('DrqsettingsComponent', () => {
    let component: DrqsettingsComponent;
    let fixture: ComponentFixture<DrqsettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DrqsettingsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrqsettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
