import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillersandcrimeComponent } from './thrillersandcrime.component';

describe('ThrillersandcrimeComponent', () => {
  let component: ThrillersandcrimeComponent;
  let fixture: ComponentFixture<ThrillersandcrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrillersandcrimeComponent]
    });
    fixture = TestBed.createComponent(ThrillersandcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
