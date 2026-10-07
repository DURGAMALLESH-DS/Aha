import { TestBed } from '@angular/core/testing';

import { HeartfeltdramaService } from './heartfeltdrama.service';

describe('HeartfeltdramaService', () => {
  let service: HeartfeltdramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartfeltdramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
