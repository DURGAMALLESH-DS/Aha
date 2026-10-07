import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyentertainersComponent } from './familyentertainers.component';

describe('FamilyentertainersComponent', () => {
  let component: FamilyentertainersComponent;
  let fixture: ComponentFixture<FamilyentertainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyentertainersComponent]
    });
    fixture = TestBed.createComponent(FamilyentertainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
