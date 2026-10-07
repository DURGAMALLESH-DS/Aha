import { TestBed } from '@angular/core/testing';

import { WatchbylanguageService } from './watchbylanguage.service';

describe('WatchbylanguageService', () => {
  let service: WatchbylanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchbylanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
