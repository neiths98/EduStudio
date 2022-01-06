import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html'
})
export class CourseViewComponent implements OnInit {

  course = {
    id: '124',
    name: 'Curso de Motoboy',
    author: 'Nero',
    thumbnail: 'https://pbs.twimg.com/media/DdaNfBJWkAI-qlq.jpg',
    classes: [
      { title: 'Aula 1 - Yodinha', link: '../../../../assets/yoda.MP4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores officiis laboriosam qui similique doloribus, accusantium quasi enim. Sunt laborum repellat, voluptates facere nihil odit hic eligendi.' },
      { title: 'Aula 2 - Yodinha', link: '../../../../assets/tiktok.MP4' },
      { title: 'Aula 3 - Yodinha', link: '../../../../assets/yoda.MP4' },
      { title: 'Aula 4 - Yodinha', link: '../../../../assets/tiktok.MP4' },
      { title: 'Aula 5 - Yodinha', link: '../../../../assets/yoda.MP4' },
    ],
    url: 'courses/124',
    length: 8
  };

  currentClass = this.course.classes[0];

  constructor() { }

  ngOnInit(): void {
  }

  updateCurrentClassOnClassClick(currentClass: any) {
    this.currentClass = currentClass;
  }

}
