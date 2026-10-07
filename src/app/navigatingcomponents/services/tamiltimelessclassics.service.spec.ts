import { TestBed } from '@angular/core/testing';

import { TamiltimelessclassicsService } from './tamiltimelessclassics.service';

describe('TamiltimelessclassicsService', () => {
  let service: TamiltimelessclassicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamiltimelessclassicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
