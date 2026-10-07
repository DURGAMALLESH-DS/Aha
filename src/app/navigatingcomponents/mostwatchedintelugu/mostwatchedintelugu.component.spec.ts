import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostwatchedinteluguComponent } from './mostwatchedintelugu.component';

describe('MostwatchedinteluguComponent', () => {
  let component: MostwatchedinteluguComponent;
  let fixture: ComponentFixture<MostwatchedinteluguComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostwatchedinteluguComponent]
    });
    fixture = TestBed.createComponent(MostwatchedinteluguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
