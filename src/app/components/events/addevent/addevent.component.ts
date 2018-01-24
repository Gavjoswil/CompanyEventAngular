import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { FormBuilder, FormGroup, FormControl }from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  eventForm: FormGroup;

  constructor( private _eventService: EventsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this._form.group({ 
      Title: new FormControl,
      Overview: new FormControl,
      Location: new FormControl,
      DateTime: new FormControl
    })
  }

  onSubmit() {
    this._eventService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/events']);
    });
  }

}
