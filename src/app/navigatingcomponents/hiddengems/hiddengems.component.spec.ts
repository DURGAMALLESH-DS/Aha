import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddengemsComponent } from './hiddengems.component';

describe('HiddengemsComponent', () => {
  let component: HiddengemsComponent;
  let fixture: ComponentFixture<HiddengemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiddengemsComponent]
    });
    fixture = TestBed.createComponent(HiddengemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
