import { TestBed } from '@angular/core/testing';

import { MostrewatchedgemsService } from './mostrewatchedgems.service';

describe('MostrewatchedgemsService', () => {
  let service: MostrewatchedgemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrewatchedgemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
