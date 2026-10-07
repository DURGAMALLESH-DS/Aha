import { TestBed } from '@angular/core/testing';

import { FantasticfafaService } from './fantasticfafa.service';

describe('FantasticfafaService', () => {
  let service: FantasticfafaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasticfafaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
