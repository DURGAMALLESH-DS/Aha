import { TestBed } from '@angular/core/testing';

import { WatchinteluguandtamilService } from './watchinteluguandtamil.service';

describe('WatchinteluguandtamilService', () => {
  let service: WatchinteluguandtamilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchinteluguandtamilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
