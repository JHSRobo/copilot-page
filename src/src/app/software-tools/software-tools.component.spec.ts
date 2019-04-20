import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareToolsComponent } from './software-tools.component';

describe('SoftwareToolsComponent', () => {
  let component: SoftwareToolsComponent;
  let fixture: ComponentFixture<SoftwareToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
