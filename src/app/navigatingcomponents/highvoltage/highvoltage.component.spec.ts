import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighvoltageComponent } from './highvoltage.component';

describe('HighvoltageComponent', () => {
  let component: HighvoltageComponent;
  let fixture: ComponentFixture<HighvoltageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighvoltageComponent]
    });
    fixture = TestBed.createComponent(HighvoltageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
