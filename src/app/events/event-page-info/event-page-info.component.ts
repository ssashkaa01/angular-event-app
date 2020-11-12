import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventModel} from '../../../models/event.model';
import {EventsDataService} from '../../../services/events-data.service';

@Component({
  selector: 'app-event-page-info',
  templateUrl: './event-page-info.component.html',
  styleUrls: ['./event-page-info.component.scss']
})
export class EventPageInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private eventsDataService: EventsDataService
  ) { }

  public item: EventModel;
  public id: number;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.eventsDataService.loadInfoViewItem(this.id);
      this.item = this.eventsDataService.getItemById(this.id);
    });

    this.eventsDataService.refreshInfoViewItem.subscribe((item: EventModel) => {
      this.item = item;
    });
  }
}
