import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html'
})
export class CoursesDashboardComponent implements OnInit {

  courses: CourseModel[];

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit(): void {
  }

}
