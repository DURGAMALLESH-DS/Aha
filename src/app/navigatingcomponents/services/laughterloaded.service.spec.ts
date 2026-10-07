import { TestBed } from '@angular/core/testing';

import { LaughterloadedService } from './laughterloaded.service';

describe('LaughterloadedService', () => {
  let service: LaughterloadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaughterloadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
