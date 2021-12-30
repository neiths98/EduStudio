import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddCardComponent } from './course-add-card.component';

describe('CourseAddCardComponent', () => {
  let component: CourseAddCardComponent;
  let fixture: ComponentFixture<CourseAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
