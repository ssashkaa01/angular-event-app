import { Component, OnInit } from '@angular/core';
import {AddEventModel} from '../../../models/add-event-model';
import {EventsDataService} from '../../../services/events-data.service';
import {EventModel} from '../../../models/event.model';

@Component({
  selector: 'app-event-form-add',
  templateUrl: './event-form-add.component.html',
  styleUrls: ['./event-form-add.component.scss']
})
export class EventFormAddComponent implements OnInit {

  constructor(private eventsDataService: EventsDataService) { }

  model = new AddEventModel();

  ngOnInit(): void {

  }

  submitForm(): void {
    const event = new EventModel(this.eventsDataService.getNextId(), this.model.title, this.model.description, this.model.date, false);
    this.eventsDataService.addItem(event);
  }
}
