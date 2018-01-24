import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'http://localhost:50858'

@Injectable()
export class EventsService {

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get(`${Api_Url}/api/Event`, { headers: this.getHeaders() });
  }

  getEventById(id: number) {
    return this._http.get(`${Api_Url}/api/Event${id}`, { headers: this.getHeaders() });
  }

  createEvent(event: Event) {
    return this._http.post(`${Api_Url}/api/Event`, event, { headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
