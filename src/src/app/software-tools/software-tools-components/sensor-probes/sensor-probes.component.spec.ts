import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorProbesComponent } from './sensor-probes.component';

describe('SensorProbesComponent', () => {
  let component: SensorProbesComponent;
  let fixture: ComponentFixture<SensorProbesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorProbesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorProbesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
