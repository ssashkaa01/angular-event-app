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
  refreshEditForm = new EventEmitter<EventModel>();
  refreshEditable = new EventEmitter<boolean>();
  editId: number;

  data: EventModel[] = [
    new EventModel(1, 'title 1', 'lorem ipsum 1', '2020-10-11', true),
    new EventModel(2, 'title 2', 'lorem ipsum 2', '2020-09-12', false),
    new EventModel(3, 'title 3', 'lorem ipsum 3', '2020-11-09', false),
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

  getNextId(): number {
    return this.data[this.data.length - 1].id + 1;
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

    this.refreshHiddenList.emit(this.getHiddenAll());
    this.refreshVisibilityList.emit(this.getVisibilityAll());
    this.refreshList.emit(this.getAll());
  }

  editItem(editItem: EventModel): void {

    const idx = this.data.findIndex((item) => item.id === editItem.id);

    this.editId = editItem.id;

    this.data = [
      ...this.data.slice(0, idx),
      editItem,
      ...this.data.slice(idx + 1)
    ];

    this.refreshHiddenList.emit(this.getHiddenAll());
    this.refreshVisibilityList.emit(this.getVisibilityAll());
    this.refreshList.emit(this.getAll());
    this.refreshEditable.emit(false);
  }

  setEditItem(id: number): void {
    const event = this.data.find(item => item.id === id);
    this.editId = id;

    if (event !== undefined) {
      this.refreshEditForm.emit(event);
      this.refreshEditable.emit(true);
    }
  }

  getEditItem(): EventModel {
    return this.data.find(item => item.id === this.editId);
  }
}
