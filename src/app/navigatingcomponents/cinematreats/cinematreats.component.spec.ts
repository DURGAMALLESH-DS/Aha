import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematreatsComponent } from './cinematreats.component';

describe('CinematreatsComponent', () => {
  let component: CinematreatsComponent;
  let fixture: ComponentFixture<CinematreatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinematreatsComponent]
    });
    fixture = TestBed.createComponent(CinematreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
