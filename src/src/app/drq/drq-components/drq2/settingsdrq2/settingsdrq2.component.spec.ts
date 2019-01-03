import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingsdrq2Component } from './settingsdrq2.component';

describe('Settingsdrq2Component', () => {
  let component: Settingsdrq2Component;
  let fixture: ComponentFixture<Settingsdrq2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Settingsdrq2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settingsdrq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
