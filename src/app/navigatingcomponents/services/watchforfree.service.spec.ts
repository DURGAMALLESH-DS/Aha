import { TestBed } from '@angular/core/testing';

import { WatchforfreeService } from './watchforfree.service';

describe('WatchforfreeService', () => {
  let service: WatchforfreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchforfreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
