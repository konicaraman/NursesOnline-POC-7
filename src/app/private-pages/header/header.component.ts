import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParChildCommunicationService } from '../services/par-child-communication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heading: string = 'My Profile';
  fullname: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commService: ParChildCommunicationService) { }


  //loggedIn username will be updated
  ngOnInit() {
    this.fullname = this.commService.getName();
    this.fullname = localStorage.getItem('token-name');
    this.router.navigate(['profile'], {relativeTo: this.activatedRoute});
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['public/login']);
  }

  changeHeading(head: string){
    this.heading = head;
  }

}
