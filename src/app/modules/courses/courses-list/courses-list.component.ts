import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course.models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  course: CourseModel = {
    id: '124',
    name: 'Curso de Motoboy',
    author: 'Nero',
    thumbnail: 'https://pbs.twimg.com/media/DdaNfBJWkAI-qlq.jpg',
    length: 8
  };
  course2: CourseModel = {
    id: '1256',
    name: 'Como Boicotar o SUS',
    author: '',
    thumbnail: 'https://i.ytimg.com/vi/d7qYhAFj0FE/maxresdefault.jpg',
    length: 23
  };
  courses = [
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
