import { TestBed } from '@angular/core/testing';

import { ThrillersandcrimeService } from './thrillersandcrime.service';

describe('ThrillersandcrimeService', () => {
  let service: ThrillersandcrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrillersandcrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
