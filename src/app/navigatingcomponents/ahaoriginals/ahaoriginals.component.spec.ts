import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaoriginalsComponent } from './ahaoriginals.component';

describe('AhaoriginalsComponent', () => {
  let component: AhaoriginalsComponent;
  let fixture: ComponentFixture<AhaoriginalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhaoriginalsComponent]
    });
    fixture = TestBed.createComponent(AhaoriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
