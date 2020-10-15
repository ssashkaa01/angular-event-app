import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  constructor() { }

  @Input() currentEvent: Event;
  @Input() index: number;

  ngOnInit(): void {
  }

}
