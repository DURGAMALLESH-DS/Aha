import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseofhorrorsComponent } from './houseofhorrors.component';

describe('HouseofhorrorsComponent', () => {
  let component: HouseofhorrorsComponent;
  let fixture: ComponentFixture<HouseofhorrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseofhorrorsComponent]
    });
    fixture = TestBed.createComponent(HouseofhorrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
