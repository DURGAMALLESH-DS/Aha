import { TestBed } from '@angular/core/testing';

import { CinematreatsService } from './cinematreats.service';

describe('CinematreatsService', () => {
  let service: CinematreatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinematreatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
