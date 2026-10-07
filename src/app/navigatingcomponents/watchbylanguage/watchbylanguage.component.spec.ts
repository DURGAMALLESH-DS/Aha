import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchbylanguageComponent } from './watchbylanguage.component';

describe('WatchbylanguageComponent', () => {
  let component: WatchbylanguageComponent;
  let fixture: ComponentFixture<WatchbylanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchbylanguageComponent]
    });
    fixture = TestBed.createComponent(WatchbylanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
