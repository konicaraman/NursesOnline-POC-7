import { Component, OnInit } from '@angular/core';
import { FetchBookingsService } from '../fetch-bookings.service';

@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent implements OnInit {
   
  pastBookings: any;

  constructor(private myService: FetchBookingsService) { }
  
  //bookings with past status(from db.json)
  
  ngOnInit() {
    this.myService.fetchBook({"past": true}).subscribe(response => {
      this.pastBookings = response;

    });
  }

}
