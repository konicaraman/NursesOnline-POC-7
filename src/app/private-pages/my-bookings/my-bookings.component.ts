import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  @Output() headingName = new EventEmitter<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['user/mypage/bookings/upcoming']);
    this.headingName.emit('My Bookings');
  }

}
