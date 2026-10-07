import { TestBed } from '@angular/core/testing';

import { NenenanineService } from './nenenanine.service';

describe('NenenanineService', () => {
  let service: NenenanineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NenenanineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
