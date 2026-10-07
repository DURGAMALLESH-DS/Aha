import { TestBed } from '@angular/core/testing';

import { HeartbeatstoriesService } from './heartbeatstories.service';

describe('HeartbeatstoriesService', () => {
  let service: HeartbeatstoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartbeatstoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
