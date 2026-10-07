import { TestBed } from '@angular/core/testing';

import { MollywoodmoodService } from './mollywoodmood.service';

describe('MollywoodmoodService', () => {
  let service: MollywoodmoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MollywoodmoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
