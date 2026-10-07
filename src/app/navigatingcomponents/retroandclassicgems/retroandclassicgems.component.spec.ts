import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroandclassicgemsComponent } from './retroandclassicgems.component';

describe('RetroandclassicgemsComponent', () => {
  let component: RetroandclassicgemsComponent;
  let fixture: ComponentFixture<RetroandclassicgemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetroandclassicgemsComponent]
    });
    fixture = TestBed.createComponent(RetroandclassicgemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
