import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchBookingsService {

  constructor(private http: HttpClient) { }

  //fetching bookings with upcomingOrpast status(stored in db.json)
  fetchBook(upcomingOrPast){
    return this.http.get('http://localhost:3000/bookings', {
      params: upcomingOrPast
    });
  }
}
