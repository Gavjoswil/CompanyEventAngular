import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EventsService } from '../../../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyEvent } from '../../../models/CompanyEvent';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  event: CompanyEvent;

  private editEventForm: FormGroup;

  constructor(private _form: FormBuilder, private _eventService: EventsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEventById(p.get('id')).subscribe((singleEvent: CompanyEvent) => {
        this.event = singleEvent;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editEventForm = this._form.group({
      EventId: new FormControl(this.event.EventId),
      Title: new FormControl(this.event.Title),
      Overview: new FormControl(this.event.Overview),
      Location: new FormControl(this.event.Location),
      DateTime: new FormControl(this.event.DateTime)
    });
  }

  onSubmit(form) {
    const updateEvent: CompanyEvent = {
      EventId: form.value.EventId,
      Title: form.value.Title,
      Overview: form.value.Overview,
      Location: form.value.Location,
      DateTime: form.value.DateTime
    };
    this._eventService.updateEvent(updateEvent).subscribe(d => {
      this._router.navigate(['/events']);
    })
  }

}
