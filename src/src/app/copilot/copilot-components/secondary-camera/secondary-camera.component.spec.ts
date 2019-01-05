import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondaryCameraComponent} from './secondary-camera.component';

describe('SecondaryCameraComponent', () => {
    let component: SecondaryCameraComponent;
    let fixture: ComponentFixture<SecondaryCameraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SecondaryCameraComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SecondaryCameraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
