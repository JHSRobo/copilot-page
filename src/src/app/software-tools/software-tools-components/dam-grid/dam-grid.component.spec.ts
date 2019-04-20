import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamGridComponent } from './dam-grid.component';

describe('DamGridComponent', () => {
  let component: DamGridComponent;
  let fixture: ComponentFixture<DamGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
