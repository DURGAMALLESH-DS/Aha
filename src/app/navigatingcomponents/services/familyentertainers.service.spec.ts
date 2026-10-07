import { TestBed } from '@angular/core/testing';

import { FamilyentertainersService } from './familyentertainers.service';

describe('FamilyentertainersService', () => {
  let service: FamilyentertainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyentertainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
