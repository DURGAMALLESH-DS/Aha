import { TestBed } from '@angular/core/testing';

import { IndieandfestivalfilmsService } from './indieandfestivalfilms.service';

describe('IndieandfestivalfilmsService', () => {
  let service: IndieandfestivalfilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndieandfestivalfilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
