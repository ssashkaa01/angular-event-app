import { Component, OnInit } from '@angular/core';
import {EventsDataService} from '../../../services/events-data.service';
import {EventModel} from '../../../models/event.model';
import {EditEventModel} from '../../../models/edit-event-model';

@Component({
  selector: 'app-event-form-edit',
  templateUrl: './event-form-edit.component.html',
  styleUrls: ['./event-form-edit.component.scss']
})
export class EventFormEditComponent implements OnInit {

  constructor(private eventsDataService: EventsDataService) { }

  model = new EditEventModel();

  ngOnInit(): void {

    const event = this.eventsDataService.getEditItem();

    this.model.id = event.id;
    this.model.title = event.title;
    this.model.description = event.description;
    this.model.date = event.date;
    this.model.hidden = event.hidden;

    this.eventsDataService.refreshEditForm.subscribe((eventModel: EventModel) => {
      this.model.id = eventModel.id;
      this.model.title = eventModel.title;
      this.model.description = eventModel.description;
      this.model.date = eventModel.date;
      this.model.hidden = eventModel.hidden;
    });
  }

  submitForm(): void {
    const event = new EventModel(this.model.id, this.model.title, this.model.description, this.model.date, this.model.hidden);
    this.eventsDataService.editItem(event);
  }
}
