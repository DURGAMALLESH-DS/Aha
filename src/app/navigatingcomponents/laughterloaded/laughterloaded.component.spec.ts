import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughterloadedComponent } from './laughterloaded.component';

describe('LaughterloadedComponent', () => {
  let component: LaughterloadedComponent;
  let fixture: ComponentFixture<LaughterloadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaughterloadedComponent]
    });
    fixture = TestBed.createComponent(LaughterloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
