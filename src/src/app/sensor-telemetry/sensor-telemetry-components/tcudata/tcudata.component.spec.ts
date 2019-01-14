import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TcudataComponent} from './tcudata.component';

describe('TcudataComponent', () => {
    let component: TcudataComponent;
    let fixture: ComponentFixture<TcudataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TcudataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TcudataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
