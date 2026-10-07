import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartfeltdramaComponent } from './heartfeltdrama.component';

describe('HeartfeltdramaComponent', () => {
  let component: HeartfeltdramaComponent;
  let fixture: ComponentFixture<HeartfeltdramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartfeltdramaComponent]
    });
    fixture = TestBed.createComponent(HeartfeltdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
