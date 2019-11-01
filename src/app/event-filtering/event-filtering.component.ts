import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent implements OnInit {

  constructor() { }
  onKeyUp(email) {
    console.log(email);
  }
  ngOnInit() {
  }

}
