import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  event:Event;

  constructor( private _activatedRoute: ActivatedRoute, private _eventService: EventsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._eventService.getEventById(routeData.get('id')).subscribe((singleEvent: Event) => {
        this.event = singleEvent;
      });
    });
  }

}
