import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRootComponent } from './app-root/app-root.component';

const routes: Routes = [
  { 
    path: '', component: AppRootComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'course', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule) },
    ],
  },
  { 
    path: '',
    children: [
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
