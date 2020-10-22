import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFormAddComponent } from './events/event-form-add/event-form-add.component';
import {FormsModule} from '@angular/forms';
import {EventsDataService} from '../services/events-data.service';
import { EventFormEditComponent } from './events/event-form-edit/event-form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventItemComponent,
    EventListComponent,
    EventFormAddComponent,
    EventFormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
