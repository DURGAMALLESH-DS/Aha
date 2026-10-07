import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalmixComponent } from './regionalmix.component';

describe('RegionalmixComponent', () => {
  let component: RegionalmixComponent;
  let fixture: ComponentFixture<RegionalmixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionalmixComponent]
    });
    fixture = TestBed.createComponent(RegionalmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
