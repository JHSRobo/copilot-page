import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCameraComponent } from './digital-camera.component';

describe('DigitalCameraComponent', () => {
  let component: DigitalCameraComponent;
  let fixture: ComponentFixture<DigitalCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
