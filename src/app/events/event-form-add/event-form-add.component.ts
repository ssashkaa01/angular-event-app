import { Component, OnInit } from '@angular/core';
import {AddEventModel} from '../../../models/add-event-model';

@Component({
  selector: 'app-event-form-add',
  templateUrl: './event-form-add.component.html',
  styleUrls: ['./event-form-add.component.scss']
})
export class EventFormAddComponent implements OnInit {

  constructor() { }

  model = new AddEventModel();

  ngOnInit(): void {

  }

}
