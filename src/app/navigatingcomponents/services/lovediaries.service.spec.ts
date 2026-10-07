import { TestBed } from '@angular/core/testing';

import { LovediariesService } from './lovediaries.service';

describe('LovediariesService', () => {
  let service: LovediariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LovediariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
