import { TestBed } from '@angular/core/testing';

import { MostwatchedintamilService } from './mostwatchedintamil.service';

describe('MostwatchedintamilService', () => {
  let service: MostwatchedintamilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostwatchedintamilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
