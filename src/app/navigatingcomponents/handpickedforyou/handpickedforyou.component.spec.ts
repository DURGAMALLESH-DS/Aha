import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandpickedforyouComponent } from './handpickedforyou.component';

describe('HandpickedforyouComponent', () => {
  let component: HandpickedforyouComponent;
  let fixture: ComponentFixture<HandpickedforyouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandpickedforyouComponent]
    });
    fixture = TestBed.createComponent(HandpickedforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
