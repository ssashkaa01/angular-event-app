import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventPageInfoComponent} from './events/event-page-info/event-page-info.component';
import {EventListPageComponent} from './events/event-list-page/event-list-page.component';

const routes: Routes = [
  { path: '', component: EventListPageComponent, pathMatch: 'full' },
  { path: 'info/:id', component: EventPageInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
