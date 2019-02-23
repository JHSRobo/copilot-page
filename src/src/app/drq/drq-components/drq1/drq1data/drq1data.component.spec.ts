import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drq1dataComponent } from './drq1data.component';

describe('Drq1dataComponent', () => {
  let component: Drq1dataComponent;
  let fixture: ComponentFixture<Drq1dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drq1dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drq1dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
