import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../../models/event.model';
import { EventsDataService} from '../../../services/events-data.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsDataService: EventsDataService) { }

  @Input() data: EventModel;
  @Input() index: number;

  setHidden(id: number): void {
    this.eventsDataService.setHidden(id);
  }

  setVisibility(id: number): void {
    this.eventsDataService.setVisibility(id);
  }

  editItem(id: number): void {
    this.eventsDataService.setEditItem(id);
  }

  ngOnInit(): void {
  }

}
