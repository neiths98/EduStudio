import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    CourseCreateComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
