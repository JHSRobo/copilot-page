import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenthicSpeciesComponent } from './benthic-species.component';

describe('BenthicSpeciesComponent', () => {
  let component: BenthicSpeciesComponent;
  let fixture: ComponentFixture<BenthicSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenthicSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenthicSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
