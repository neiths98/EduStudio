import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseViewComponent } from './course-view/course-view.component';


@NgModule({
  declarations: [
    CourseCreateComponent,
    CourseFormComponent,
    CourseEditComponent,
    CourseViewComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
