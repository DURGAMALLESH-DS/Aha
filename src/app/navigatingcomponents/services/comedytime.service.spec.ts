import { TestBed } from '@angular/core/testing';

import { ComedytimeService } from './comedytime.service';

describe('ComedytimeService', () => {
  let service: ComedytimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedytimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
