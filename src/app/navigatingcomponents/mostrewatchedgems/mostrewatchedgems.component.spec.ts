import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrewatchedgemsComponent } from './mostrewatchedgems.component';

describe('MostrewatchedgemsComponent', () => {
  let component: MostrewatchedgemsComponent;
  let fixture: ComponentFixture<MostrewatchedgemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrewatchedgemsComponent]
    });
    fixture = TestBed.createComponent(MostrewatchedgemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
