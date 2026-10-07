import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestreleaseComponent } from './latestrelease.component';

describe('LatestreleaseComponent', () => {
  let component: LatestreleaseComponent;
  let fixture: ComponentFixture<LatestreleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestreleaseComponent]
    });
    fixture = TestBed.createComponent(LatestreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
