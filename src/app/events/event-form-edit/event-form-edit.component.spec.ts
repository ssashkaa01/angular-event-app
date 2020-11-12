import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormEditComponent } from './event-form-edit.component';

describe('EventFormEditComponent', () => {
  let component: EventFormEditComponent;
  let fixture: ComponentFixture<EventFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
