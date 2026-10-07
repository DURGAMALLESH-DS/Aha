import { TestBed } from '@angular/core/testing';

import { EmotionalanddramaService } from './emotionalanddrama.service';

describe('EmotionalanddramaService', () => {
  let service: EmotionalanddramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmotionalanddramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
