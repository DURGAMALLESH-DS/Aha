import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugutimelessclassicsComponent } from './telugutimelessclassics.component';

describe('TelugutimelessclassicsComponent', () => {
  let component: TelugutimelessclassicsComponent;
  let fixture: ComponentFixture<TelugutimelessclassicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelugutimelessclassicsComponent]
    });
    fixture = TestBed.createComponent(TelugutimelessclassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
