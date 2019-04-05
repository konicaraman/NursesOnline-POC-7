import { Component, OnInit } from '@angular/core';
import { FetchBookingsService } from '../fetch-bookings.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  upcomingBookings: any;

  constructor(private myService: FetchBookingsService) { }


  //fetching bookings with upcoming status(from db.json)
  ngOnInit() {
    this.myService.fetchBook({"upcoming": true}).subscribe(response => {
      this.upcomingBookings = response;

    });
  }

}
