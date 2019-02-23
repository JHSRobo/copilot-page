import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrusterSensitivityComponent } from './thruster-sensitivity.component';

describe('ThrusterSensitivityComponent', () => {
  let component: ThrusterSensitivityComponent;
  let fixture: ComponentFixture<ThrusterSensitivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrusterSensitivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrusterSensitivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
