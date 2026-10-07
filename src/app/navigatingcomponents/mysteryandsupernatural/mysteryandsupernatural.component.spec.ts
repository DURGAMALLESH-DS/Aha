import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryandsupernaturalComponent } from './mysteryandsupernatural.component';

describe('MysteryandsupernaturalComponent', () => {
  let component: MysteryandsupernaturalComponent;
  let fixture: ComponentFixture<MysteryandsupernaturalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysteryandsupernaturalComponent]
    });
    fixture = TestBed.createComponent(MysteryandsupernaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
