import { TestBed } from '@angular/core/testing';

import { TelugutimelessclassicsService } from './telugutimelessclassics.service';

describe('TelugutimelessclassicsService', () => {
  let service: TelugutimelessclassicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelugutimelessclassicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
