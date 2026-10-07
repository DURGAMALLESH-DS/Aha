import { TestBed } from '@angular/core/testing';

import { UpcomingonahaService } from './upcomingonaha.service';

describe('UpcomingonahaService', () => {
  let service: UpcomingonahaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingonahaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
