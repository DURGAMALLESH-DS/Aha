import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingonahaComponent } from './upcomingonaha.component';

describe('UpcomingonahaComponent', () => {
  let component: UpcomingonahaComponent;
  let fixture: ComponentFixture<UpcomingonahaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingonahaComponent]
    });
    fixture = TestBed.createComponent(UpcomingonahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
