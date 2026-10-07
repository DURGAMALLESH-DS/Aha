import { TestBed } from '@angular/core/testing';

import { MysteryandsupernaturalService } from './mysteryandsupernatural.service';

describe('MysteryandsupernaturalService', () => {
  let service: MysteryandsupernaturalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysteryandsupernaturalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
