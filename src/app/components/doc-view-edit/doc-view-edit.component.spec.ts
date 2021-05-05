import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocViewEditComponent } from './doc-view-edit.component';

describe('DocViewEditComponent', () => {
  let component: DocViewEditComponent;
  let fixture: ComponentFixture<DocViewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocViewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
