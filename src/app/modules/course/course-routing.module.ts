import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Routes = [
  { path: '', component: CourseViewComponent },
  { path: 'new', component: CourseCreateComponent },
  { path: 'edit', component: CourseEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
