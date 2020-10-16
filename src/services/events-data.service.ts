import { Injectable, EventEmitter  } from '@angular/core';
import {EventModel} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {

  constructor() { }

  refreshList = new EventEmitter<EventModel[]>();
  refreshHiddenList = new EventEmitter<EventModel[]>();
  refreshVisibilityList = new EventEmitter<EventModel[]>();

  data: EventModel[] = [
    new EventModel(1, 'title 1', 'lorem ipsum 1', '10-11-2020', true),
    new EventModel(2, 'title 2', 'lorem ipsum 2', '9-12-2020', false),
    new EventModel(3, 'title 3', 'lorem ipsum 3', '21-10-2020', false),
  ];

  getAll(): EventModel[] {
    return this.data.slice();
  }

  getVisibilityAll(): EventModel[] {
    return this.data.filter(item => item.hidden === false);
  }

  getHiddenAll(): EventModel[] {
    return this.data.filter(item => item.hidden === true);
  }

  getByIdx(idx: number): EventModel {
    return this.data.slice(idx)[0];
  }

  setHidden(id: number): void {
    const idx = this.data.findIndex(item => item.id === id);
    this.data[idx].hidden = true;

    this.refreshHiddenList.emit(this.getHiddenAll());
    this.refreshVisibilityList.emit(this.getVisibilityAll());
    this.refreshList.emit(this.getAll());
  }

  setVisibility(id: number): void {
    const idx = this.data.findIndex(item => item.id === id);
    this.data[idx].hidden = false;

    this.refreshHiddenList.emit(this.getHiddenAll());
    this.refreshVisibilityList.emit(this.getVisibilityAll());
    this.refreshList.emit(this.getAll());
  }

  addItem(newItem: EventModel): void {
    this.data.push(newItem);

    this.refreshVisibilityList.emit(this.getVisibilityAll());
    this.refreshList.emit(this.getAll());
  }

}
