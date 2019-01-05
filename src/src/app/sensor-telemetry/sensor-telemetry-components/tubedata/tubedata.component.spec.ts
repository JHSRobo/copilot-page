import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TubedataComponent} from './tubedata.component';

describe('TubedataComponent', () => {
    let component: TubedataComponent;
    let fixture: ComponentFixture<TubedataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TubedataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TubedataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
