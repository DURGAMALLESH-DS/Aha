import { TestBed } from '@angular/core/testing';

import { MostwatchedinteluguService } from './mostwatchedintelugu.service';

describe('MostwatchedinteluguService', () => {
  let service: MostwatchedinteluguService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostwatchedinteluguService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
