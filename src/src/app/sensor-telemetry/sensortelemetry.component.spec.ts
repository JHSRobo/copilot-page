import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensortelemetryComponent } from './sensortelemetry.component';

describe('SensortelemetryComponent', () => {
  let component: SensortelemetryComponent;
  let fixture: ComponentFixture<SensortelemetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensortelemetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensortelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
