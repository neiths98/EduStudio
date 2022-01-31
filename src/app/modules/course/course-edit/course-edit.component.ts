import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit {

  course!: CourseModel;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.course = this.coursesService.getCourseById(params['id']);
    });
  }

}
