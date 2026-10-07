import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostwatchedintamilComponent } from './mostwatchedintamil.component';

describe('MostwatchedintamilComponent', () => {
  let component: MostwatchedintamilComponent;
  let fixture: ComponentFixture<MostwatchedintamilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostwatchedintamilComponent]
    });
    fixture = TestBed.createComponent(MostwatchedintamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
