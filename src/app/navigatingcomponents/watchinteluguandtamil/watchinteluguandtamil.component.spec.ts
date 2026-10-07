import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchinteluguandtamilComponent } from './watchinteluguandtamil.component';

describe('WatchinteluguandtamilComponent', () => {
  let component: WatchinteluguandtamilComponent;
  let fixture: ComponentFixture<WatchinteluguandtamilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchinteluguandtamilComponent]
    });
    fixture = TestBed.createComponent(WatchinteluguandtamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
