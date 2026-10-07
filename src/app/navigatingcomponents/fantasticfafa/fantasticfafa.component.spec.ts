import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticfafaComponent } from './fantasticfafa.component';

describe('FantasticfafaComponent', () => {
  let component: FantasticfafaComponent;
  let fixture: ComponentFixture<FantasticfafaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasticfafaComponent]
    });
    fixture = TestBed.createComponent(FantasticfafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
