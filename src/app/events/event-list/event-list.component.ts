import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }

  data: any[] = [
    {title: 'title 1', description: 'lorem ipsum 1', date: '10-11-2020'},
    {title: 'title 2', description: 'lorem ipsum 2', date: '11-11-2020'},
    {title: 'title 3', description: 'lorem ipsum 3', date: '12-11-2020'},
  ];

  ngOnInit(): void {
  }

}
