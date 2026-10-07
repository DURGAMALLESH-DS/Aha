import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionarenaComponent } from './actionarena.component';

describe('ActionarenaComponent', () => {
  let component: ActionarenaComponent;
  let fixture: ComponentFixture<ActionarenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionarenaComponent]
    });
    fixture = TestBed.createComponent(ActionarenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
