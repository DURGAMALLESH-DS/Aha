import { TestBed } from '@angular/core/testing';

import { HandpickedforyouService } from './handpickedforyou.service';

describe('HandpickedforyouService', () => {
  let service: HandpickedforyouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandpickedforyouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
