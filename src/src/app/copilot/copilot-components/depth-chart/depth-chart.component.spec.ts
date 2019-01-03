import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartComponent } from './depth-chart.component';

describe('DepthChartComponent', () => {
  let component: DepthChartComponent;
  let fixture: ComponentFixture<DepthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
