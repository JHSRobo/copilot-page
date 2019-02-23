import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drq1Component } from './drq1.component';

describe('Drq1Component', () => {
  let component: Drq1Component;
  let fixture: ComponentFixture<Drq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
