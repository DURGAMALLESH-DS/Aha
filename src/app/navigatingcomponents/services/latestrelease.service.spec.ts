import { TestBed } from '@angular/core/testing';

import { LatestreleaseService } from './latestrelease.service';

describe('LatestreleaseService', () => {
  let service: LatestreleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestreleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
