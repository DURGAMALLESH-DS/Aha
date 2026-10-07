import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingnowComponent } from './trendingnow.component';

describe('TrendingnowComponent', () => {
  let component: TrendingnowComponent;
  let fixture: ComponentFixture<TrendingnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingnowComponent]
    });
    fixture = TestBed.createComponent(TrendingnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
