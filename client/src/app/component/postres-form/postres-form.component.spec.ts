import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresFormComponent } from './postres-form.component';

describe('PostresFormComponent', () => {
  let component: PostresFormComponent;
  let fixture: ComponentFixture<PostresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
