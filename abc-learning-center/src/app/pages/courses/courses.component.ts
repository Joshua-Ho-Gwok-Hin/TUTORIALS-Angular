import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const routeToPage = this.route.snapshot.component;
  }

}
