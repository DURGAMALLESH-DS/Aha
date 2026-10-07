import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovediariesComponent } from './lovediaries.component';

describe('LovediariesComponent', () => {
  let component: LovediariesComponent;
  let fixture: ComponentFixture<LovediariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovediariesComponent]
    });
    fixture = TestBed.createComponent(LovediariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
