import { TestBed } from '@angular/core/testing';

import { AhaoriginalsService } from './ahaoriginals.service';

describe('AhaoriginalsService', () => {
  let service: AhaoriginalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhaoriginalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
