import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingsdrq1Component } from './settingsdrq1.component';

describe('Settingsdrq1Component', () => {
  let component: Settingsdrq1Component;
  let fixture: ComponentFixture<Settingsdrq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settingsdrq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settingsdrq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
