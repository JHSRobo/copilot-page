import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Drq2dataComponent} from './drq2data.component';

describe('Drq2dataComponent', () => {
    let component: Drq2dataComponent;
    let fixture: ComponentFixture<Drq2dataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Drq2dataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Drq2dataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
