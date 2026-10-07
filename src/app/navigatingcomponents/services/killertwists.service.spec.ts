import { TestBed } from '@angular/core/testing';

import { KillertwistsService } from './killertwists.service';

describe('KillertwistsService', () => {
  let service: KillertwistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KillertwistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
