import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: CourseModel[];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {
  }

}
