import { TestBed } from '@angular/core/testing';

import { HighvoltageService } from './highvoltage.service';

describe('HighvoltageService', () => {
  let service: HighvoltageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighvoltageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
