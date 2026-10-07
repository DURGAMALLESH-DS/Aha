import { TestBed } from '@angular/core/testing';

import { HiddengemsService } from './hiddengems.service';

describe('HiddengemsService', () => {
  let service: HiddengemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiddengemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
