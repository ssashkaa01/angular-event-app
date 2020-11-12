import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageInfoComponent } from './event-page-info.component';

describe('EventPageInfoComponent', () => {
  let component: EventPageInfoComponent;
  let fixture: ComponentFixture<EventPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
