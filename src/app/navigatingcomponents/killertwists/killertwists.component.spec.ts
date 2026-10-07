import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillertwistsComponent } from './killertwists.component';

describe('KillertwistsComponent', () => {
  let component: KillertwistsComponent;
  let fixture: ComponentFixture<KillertwistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KillertwistsComponent]
    });
    fixture = TestBed.createComponent(KillertwistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
