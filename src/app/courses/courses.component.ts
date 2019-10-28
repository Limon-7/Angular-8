import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component ({
   selector : 'app-courses',
   // template: '<h1> Couses</h1>'
  templateUrl : './courses.component.html'
})
export class CoursesComponent {
  courseTitle = 'Course List';
  courses = ['BCSE', 'BMEC', 'BEEE'];


  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
