import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watchin4kComponent } from './watchin4k.component';

describe('Watchin4kComponent', () => {
  let component: Watchin4kComponent;
  let fixture: ComponentFixture<Watchin4kComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Watchin4kComponent]
    });
    fixture = TestBed.createComponent(Watchin4kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
