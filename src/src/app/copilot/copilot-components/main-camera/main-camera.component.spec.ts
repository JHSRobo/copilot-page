import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainCameraComponent} from './main-camera.component';

describe('MainCameraComponent', () => {
    let component: MainCameraComponent;
    let fixture: ComponentFixture<MainCameraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MainCameraComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainCameraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
