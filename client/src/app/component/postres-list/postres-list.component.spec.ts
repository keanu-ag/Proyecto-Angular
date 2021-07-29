import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresListComponent } from './postres-list.component';

describe('PostresListComponent', () => {
  let component: PostresListComponent;
  let fixture: ComponentFixture<PostresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
