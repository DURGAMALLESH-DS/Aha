import { TestBed } from '@angular/core/testing';

import { Watchin4kService } from './watchin4k.service';

describe('Watchin4kService', () => {
  let service: Watchin4kService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Watchin4kService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
