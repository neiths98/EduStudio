import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'dashboard', component: CoursesDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
