import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartbeatstoriesComponent } from './heartbeatstories.component';

describe('HeartbeatstoriesComponent', () => {
  let component: HeartbeatstoriesComponent;
  let fixture: ComponentFixture<HeartbeatstoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartbeatstoriesComponent]
    });
    fixture = TestBed.createComponent(HeartbeatstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
