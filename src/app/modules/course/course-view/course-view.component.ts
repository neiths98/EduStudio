import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ClassModel, CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html'
})
export class CourseViewComponent implements OnInit {

  course!: CourseModel;
  currentClass!: ClassModel;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.course = this.coursesService.getCourseById(params['id']);
      this.currentClass = this.course.classes[0];
    });
  }

  updateCurrentClassOnClassClick(currentClass: any) {
    this.currentClass = currentClass;
  }

}
