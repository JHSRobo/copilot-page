import { TestBed, inject } from '@angular/core/testing';

import { DigitalCamerasService } from './digital-cameras.service';

describe('DigitalCamerasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitalCamerasService]
    });
  });

  it('should be created', inject([DigitalCamerasService], (service: DigitalCamerasService) => {
    expect(service).toBeTruthy();
  }));
});
