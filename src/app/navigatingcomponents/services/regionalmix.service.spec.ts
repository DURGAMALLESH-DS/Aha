import { TestBed } from '@angular/core/testing';

import { RegionalmixService } from './regionalmix.service';

describe('RegionalmixService', () => {
  let service: RegionalmixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionalmixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
