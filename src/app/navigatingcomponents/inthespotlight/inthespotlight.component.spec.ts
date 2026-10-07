import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InthespotlightComponent } from './inthespotlight.component';

describe('InthespotlightComponent', () => {
  let component: InthespotlightComponent;
  let fixture: ComponentFixture<InthespotlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InthespotlightComponent]
    });
    fixture = TestBed.createComponent(InthespotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
