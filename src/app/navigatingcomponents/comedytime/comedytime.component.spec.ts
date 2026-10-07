import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedytimeComponent } from './comedytime.component';

describe('ComedytimeComponent', () => {
  let component: ComedytimeComponent;
  let fixture: ComponentFixture<ComedytimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedytimeComponent]
    });
    fixture = TestBed.createComponent(ComedytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
