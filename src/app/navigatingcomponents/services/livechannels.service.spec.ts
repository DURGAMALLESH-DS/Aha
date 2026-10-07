import { TestBed } from '@angular/core/testing';

import { LivechannelsService } from './livechannels.service';

describe('LivechannelsService', () => {
  let service: LivechannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivechannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
