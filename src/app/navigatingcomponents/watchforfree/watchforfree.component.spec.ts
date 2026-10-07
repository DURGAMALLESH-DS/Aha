import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchforfreeComponent } from './watchforfree.component';

describe('WatchforfreeComponent', () => {
  let component: WatchforfreeComponent;
  let fixture: ComponentFixture<WatchforfreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchforfreeComponent]
    });
    fixture = TestBed.createComponent(WatchforfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
