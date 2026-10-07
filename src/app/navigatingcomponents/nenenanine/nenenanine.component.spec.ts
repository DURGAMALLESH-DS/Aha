import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenenanineComponent } from './nenenanine.component';

describe('NenenanineComponent', () => {
  let component: NenenanineComponent;
  let fixture: ComponentFixture<NenenanineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NenenanineComponent]
    });
    fixture = TestBed.createComponent(NenenanineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
