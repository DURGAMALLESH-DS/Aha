import { TestBed } from '@angular/core/testing';

import { HouseofhorrorsService } from './houseofhorrors.service';

describe('HouseofhorrorsService', () => {
  let service: HouseofhorrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseofhorrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
