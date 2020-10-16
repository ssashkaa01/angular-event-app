import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../../models/event.model';
import {EventsDataService} from '../../../services/events-data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(private eventsDataService: EventsDataService) { }

  listVisibility: EventModel[];
  listHidden: EventModel[];
  list: EventModel[];

  ngOnInit() {
    this.listVisibility = this.eventsDataService.getVisibilityAll();
    this.listHidden = this.eventsDataService.getHiddenAll();
    this.list = this.eventsDataService.getAll();

    this.eventsDataService.refreshList.subscribe((newEvents: EventModel[]) => {
      this.list = newEvents;
    });

    this.eventsDataService.refreshVisibilityList.subscribe((newEvents: EventModel[]) => {
      this.listVisibility = newEvents;
    });

    this.eventsDataService.refreshHiddenList.subscribe((newEvents: EventModel[]) => {
      this.listHidden = newEvents;
    });
  }
}
