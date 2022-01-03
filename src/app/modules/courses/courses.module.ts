import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseAddCardComponent } from './course-add-card/course-add-card.component';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseCardComponent,
    CourseAddCardComponent,
    CoursesDashboardComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
