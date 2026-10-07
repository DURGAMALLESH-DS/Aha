import { TestBed } from '@angular/core/testing';

import { InthespotlightService } from './inthespotlight.service';

describe('InthespotlightService', () => {
  let service: InthespotlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InthespotlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
