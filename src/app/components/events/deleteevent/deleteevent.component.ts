import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyEvent } from '../../../models/CompanyEvent';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  event: CompanyEvent

  constructor(private _eventService: EventsService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._eventService.getEventById(p.get('id')).subscribe((singleEvent: CompanyEvent) => {
        this.event = singleEvent;
      })
    })
  }

  ngOnInit() {
  }

  onDelete() {
    this._eventService.deleteEvent(this.event.EventId).subscribe(() => {
      this._router.navigate(['/events']);
    });
  }

}
