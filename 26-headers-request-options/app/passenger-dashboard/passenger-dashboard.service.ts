import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({ // This is how you can create custom headers from httpModule Headers object
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers // After creating header, you can pass that header to the options object
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }

}
