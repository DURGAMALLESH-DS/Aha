import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollywoodmoodComponent } from './mollywoodmood.component';

describe('MollywoodmoodComponent', () => {
  let component: MollywoodmoodComponent;
  let fixture: ComponentFixture<MollywoodmoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MollywoodmoodComponent]
    });
    fixture = TestBed.createComponent(MollywoodmoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
