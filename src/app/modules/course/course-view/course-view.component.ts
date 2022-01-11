import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ClassModel, CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html'
})
export class CourseViewComponent implements OnInit {

  course: CourseModel;
  currentClass: ClassModel;

  constructor(private coursesService: CoursesService) {
    this.course = this.coursesService.getCourseById('124');
    this.currentClass = this.course.classes[0];
  }

  ngOnInit(): void {
  }

  updateCurrentClassOnClassClick(currentClass: any) {
    this.currentClass = currentClass;
  }

}
