import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieandfestivalfilmsComponent } from './indieandfestivalfilms.component';

describe('IndieandfestivalfilmsComponent', () => {
  let component: IndieandfestivalfilmsComponent;
  let fixture: ComponentFixture<IndieandfestivalfilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndieandfestivalfilmsComponent]
    });
    fixture = TestBed.createComponent(IndieandfestivalfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
