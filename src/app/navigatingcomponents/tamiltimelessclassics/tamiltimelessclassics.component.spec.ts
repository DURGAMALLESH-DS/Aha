import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamiltimelessclassicsComponent } from './tamiltimelessclassics.component';

describe('TamiltimelessclassicsComponent', () => {
  let component: TamiltimelessclassicsComponent;
  let fixture: ComponentFixture<TamiltimelessclassicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamiltimelessclassicsComponent]
    });
    fixture = TestBed.createComponent(TamiltimelessclassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
