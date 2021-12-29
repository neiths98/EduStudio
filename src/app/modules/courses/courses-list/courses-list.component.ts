import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  list = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
    console.log('entrou');
  }

}
