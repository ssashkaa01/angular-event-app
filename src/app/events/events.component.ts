import { Component, OnInit } from '@angular/core';
import {EventsDataService} from '../../services/events-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsDataService: EventsDataService) { }

  editable = false;

  ngOnInit(): void {

    this.eventsDataService.refreshEditable.subscribe((editable: boolean) => {
      this.editable = editable;
    });
  }
}
