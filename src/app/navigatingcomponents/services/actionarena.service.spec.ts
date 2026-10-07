import { TestBed } from '@angular/core/testing';

import { ActionarenaService } from './actionarena.service';

describe('ActionarenaService', () => {
  let service: ActionarenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionarenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
