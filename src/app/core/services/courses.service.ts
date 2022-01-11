import { Injectable } from '@angular/core';
import { ClassModel, CourseModel } from 'src/app/models/course.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private course: CourseModel = {
    id: '124',
    name: 'Curso de Motoboy',
    author: 'Nero',
    thumbnail: 'https://pbs.twimg.com/media/DdaNfBJWkAI-qlq.jpg',
    classes: [
      {
        id: '1',
        title: 'Aula 1 - Yodinha',
        url: '../../../../assets/yoda.MP4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores officiis laboriosam qui similique doloribus, accusantium quasi enim. Sunt laborum repellat, voluptates facere nihil odit hic eligendi.'
      },  
      { 
        id: '2',
        title: 'Aula 2 - Yodinha',
        url: '../../../../assets/tiktok.MP4'
      },
      {
        id: '3',
        title: 'Aula 3 - Yodinha',
        url: '../../../../assets/yoda.MP4'
      },
      {
        id: '4',
        title:'Aula 4 - Yodinha',
        url: '../../../../assets/tiktok.MP4'
      },
      {
        id: '5',
        title: 'Aula 5 - Yodinha',
        url: '../../../../assets/yoda.MP4'
      },
    ],
    url: 'courses/124',
    length: 8
  };

  private course2: CourseModel = {
    id: '127',
    name: 'Curso de TikTok',
    author: 'Nero',
    thumbnail: 'https://pbs.twimg.com/media/DdaNfBJWkAI-qlq.jpg',
    classes: [
      {
        id: '1',
        title: 'Aula 1 - Yodinha',
        url: '../../../../assets/yoda.MP4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores officiis laboriosam qui similique doloribus, accusantium quasi enim. Sunt laborum repellat, voluptates facere nihil odit hic eligendi.'
      },  
      { 
        id: '2',
        title: 'Aula 2 - Yodinha',
        url: '../../../../assets/tiktok.MP4'
      },
      {
        id: '3',
        title: 'Aula 3 - Yodinha',
        url: '../../../../assets/yoda.MP4'
      },
      {
        id: '4',
        title:'Aula 4 - Yodinha',
        url: '../../../../assets/tiktok.MP4'
      },
      {
        id: '5',
        title: 'Aula 5 - Yodinha',
        url: '../../../../assets/yoda.MP4'
      },
    ],
    url: 'courses/124',
    length: 8
  };


  private courses = [
    this.course,
    this.course2,
  ];

  constructor() { }

  public getCourses() {
    return this.courses;
  }

  public getCourseById(id: string) {
    return this.courses.filter((course) => course.id === id)[0];
  }
}
