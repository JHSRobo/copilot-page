import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statusdrq2Component } from './statusdrq2.component';

describe('Statusdrq2Component', () => {
  let component: Statusdrq2Component;
  let fixture: ComponentFixture<Statusdrq2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statusdrq2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statusdrq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
