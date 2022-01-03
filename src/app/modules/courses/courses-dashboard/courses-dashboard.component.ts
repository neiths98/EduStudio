import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html'
})
export class CoursesDashboardComponent implements OnInit {

  course: CourseModel = {
    id: '124',
    name: 'Curso de Motoboy',
    author: 'Nero',
    thumbnail: 'https://pbs.twimg.com/media/DdaNfBJWkAI-qlq.jpg',
    url: 'courses/124',
    length: 8
  };
  course2: CourseModel = {
    id: '1256',
    name: 'Como Boicotar o SUS',
    author: '',
    thumbnail: 'https://i.ytimg.com/vi/d7qYhAFj0FE/maxresdefault.jpg',
    url: 'courses/1256',
    length: 23
  };
  coursesList: CourseModel[] = [
    this.course,
    this.course2,
    this.course,
    this.course2,
    this.course,
    this.course,
    this.course2,
    this.course,
    this.course2,
    this.course
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
