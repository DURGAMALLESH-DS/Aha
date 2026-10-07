import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalanddramaComponent } from './emotionalanddrama.component';

describe('EmotionalanddramaComponent', () => {
  let component: EmotionalanddramaComponent;
  let fixture: ComponentFixture<EmotionalanddramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionalanddramaComponent]
    });
    fixture = TestBed.createComponent(EmotionalanddramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
