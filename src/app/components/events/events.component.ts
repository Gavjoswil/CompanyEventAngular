import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { CompanyEvent } from '../../models/CompanyEvent';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  columnNames = ['details', 'EventId', 'Title', 'Overview', 'Location', 'DateTime', 'buttons'];
  dataSource: EventDataSource | null

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this._eventsService.getEvents().subscribe((events: CompanyEvent[]) => {
      this.dataSource = new EventDataSource(events);
    });
  }
}

export class EventDataSource extends DataSource<any> {
  constructor (private eventsData: CompanyEvent[]) {
    super();
  }

  connect(): Observable<CompanyEvent[]> {
    return Observable.of(this.eventsData);
  }

  disconnect() { }
}
