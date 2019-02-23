import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drq2Component } from './drq2.component';

describe('Drq2Component', () => {
  let component: Drq2Component;
  let fixture: ComponentFixture<Drq2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drq2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
