import { TestBed } from '@angular/core/testing';

import { TrendingnowService } from './trendingnow.service';

describe('TrendingnowService', () => {
  let service: TrendingnowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingnowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
